<?php

namespace UTC\StatsBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use DateTime;
use UTC\StatsBundle\Entity\FileStats;
use UTC\StatsBundle\Entity\OptaMatch;
use UTC\StatsBundle\Entity\OptaMatchBooking;
use UTC\StatsBundle\Entity\OptaMatchGoal;
use UTC\StatsBundle\Entity\OptaMatchGoalAssist;
use UTC\StatsBundle\Entity\OptaMatchOfficial;
use UTC\StatsBundle\Entity\OptaMatchPlayerStat;
use UTC\StatsBundle\Entity\OptaMatchLineup;
use UTC\StatsBundle\Entity\OptaMatchTeamStat;
use UTC\StatsBundle\Entity\OptaOfficial;
use UTC\StatsBundle\Entity\OptaPlayer;
use UTC\StatsBundle\Entity\OptaTeam;
use UTC\StatsBundle\Entity\OptaVenue;

class FileProcessController extends Controller
{
    static $em;
    static $date_time;
    static $file_controller;
    static $stats_controller;
    static $players = array();
    static $to_be_saved = array();
    static $repositories;

    public function __construct()
    {
        self::$file_controller = new FileController();
        self::$stats_controller = new StatsController();
        self::resetToBeSaved();
    }

    /**
     * @param $filename
     * @param bool $flush
     */
    public function processFile($filename,$flush = true)
    {
        $re = $this->getDoctrine()->getRepository('UTCStatsBundle:FileStats');
        if(false == ($entity = $re->findOneBy(array('filename'=>$filename)))) {
            $entity = new FileStats();
            $entity->setFilename($filename);
            $entity->setIsProcessed(false);
            $entity->setTimestamp(self::$date_time);
//            self::$em->merge($entity);
        }
        $file = self::$file_controller->loadFile($filename);
        $this->processXml($file,false);

        $entity->setIsProcessed(true);
        self::$em->merge($entity);

        if($flush === true) {
            self::$em->flush();
            self::$em->clear();
            $this->getDoctrine()->resetManager();
        }
    }

    /**
     * @param $files
     * @param int $batch_at
     */
    public function processBatch($files,$batch_at = 5)
    {
        self::$em = $this->getDoctrine()->getManager();
        self::$em->getconnection()->getConfiguration()->setSQLLogger(null);
        self::$stats_controller->setContainer($this->container);

        $batch_at = ($batch_at > 1 ? $batch_at : 1);
        self::$date_time = new DateTime();
        $cycle = 0;
        foreach($files as $file) {
            $cycle++;
            $this->processFile($file,($cycle % $batch_at === 0 ? true : false));
        }
        if(count($files) > 0) {
            self::$em->flush();
            self::$em->clear();
        }
    }

    public function processXml($file,$flush = true)
    {
        $xml = (simplexml_load_string($file));
        $repositories = $this->repositories();

        if(false === $xml) {
            return false;
        }
        $document = $xml->xpath('/SoccerFeed/SoccerDocument');
        $match_id = str_replace(StatsController::$prefixes['match'],'',$xml->xpath('/SoccerFeed/SoccerDocument')[0]->attributes()['uID']);
        $timestamp = (trim($xml->xpath('/SoccerFeed/SoccerDocument/MatchData/MatchInfo')[0]->attributes()['TimeStamp']));

        $match_date = new DateTime();
        $match_date->setTimestamp(strtotime($timestamp));
        if(false == ($match = $repositories['match']->findOneBy(array('matchId'=>$match_id)))) {
            $match = new OptaMatch();
        }
        $match->setMatchId($match_id);
        $match->setMatchDate($match_date);
        $match->setCompetitionId(str_replace(StatsController::$prefixes['competition'],'',$xml->xpath('/SoccerFeed/SoccerDocument/Competition')[0]->attributes()['uID']));
        $match->setSeasonId(trim($xml->xpath("/SoccerFeed/SoccerDocument/Competition/Stat[@Type='season_id']")[0]));
        if($xml->xpath('//MatchData/MatchInfo/Attendance')) {
            $match->setAttendance(trim($xml->xpath('//MatchData/MatchInfo/Attendance')[0]));
        }
        $match->setMatchType(trim($xml->xpath('//MatchData/MatchInfo')[0]->attributes()['MatchType']));
        $match->setPeriod(trim($xml->xpath('//MatchData/MatchInfo')[0]->attributes()['Period']));
        $match->setWeather(trim($xml->xpath('//MatchData/MatchInfo')[0]->attributes()['Weather']));
        if($xml->xpath('//MatchData/MatchInfo/Result')) {
            $match->setResultType(trim($xml->xpath('//MatchData/MatchInfo/Result')[0]->attributes()['Type']));
            $match->setResultWinner(str_replace(StatsController::$prefixes['team'],'',$xml->xpath('//MatchData/MatchInfo/Result')[0]->attributes()['Winner']));
        }
        if($matchday = $xml->xpath("/SoccerFeed/SoccerDocument/Competition/Stat[@Type='matchday']")) {
            $match->setMatchDay(trim($matchday[0]));
        }

        $team_players = $xml->xpath('//Team');
        foreach($team_players as $team) {
            $players = $team->xpath('Player');
            foreach($players as $player) {
                $pa = $player->attributes();
                $player_id = str_replace(StatsController::$prefixes['player'],'',$pa['uID']);
                if(array_key_exists($player_id,self::$to_be_saved['player'])) {
                    continue;
                }
                if(false == ($player_entity = $repositories['players']->findOneBy(array('playerId'=>$player_id)))) {
                    $player_entity = new OptaPlayer();
                    $player_entity->setPlayerId($player_id);
                }
                $player_entity->setFirstName(trim($player->xpath('PersonName/First')[0]));
                $player_entity->setLastName(trim($player->xpath('PersonName/Last')[0]));
                if($known = $player->xpath('PersonName/Known')) {
                    $player_entity->setKnownName(trim($known[0]));
                }
                self::$em->merge($player_entity);
                self::$to_be_saved['player'][$player_id] = true;
            }
        }

        $teams = $xml->xpath('//TeamData');
        $match_teams = array();
        foreach($teams as $team) {
            $attr = $team->attributes();
            $side = trim($attr['Side']);
            $team_array = array('team_id'=>str_replace(StatsController::$prefixes['team'],'',$attr['TeamRef']),'side'=>trim($attr['Side']),'score'=>trim($attr['Score']));
            $team_id = $team_array['team_id'];
            $match_teams[$side] = $team_array;
            $lineup = $team->xpath('PlayerLineUp');
            foreach($lineup as $players) {
                foreach($players as $player) {
                    $pa = $player->attributes();
                    $player_id = str_replace(StatsController::$prefixes['player'],'',$pa['PlayerRef']);
                    /**
                     * Player has already been created for this match
                     */
                    if(false == ($entry = $repositories['lineup']->findOneBy(array(
                        'playerId'=>$player_id,
                        'teamId'=>$team_array['team_id'],
                        'matchId'=>$match->getMatchId(),
                    )))) {
                        $entry = new OptaMatchLineup();
                    }
                    $entry->setPlayerId($player_id);
                    $entry->setPosition(trim($pa['Position']));
                    $entry->setShirtNumber(trim($pa['ShirtNumber']));
                    $entry->setStatus(trim($pa['Status']));
                    $entry->setTeamId($team_array['team_id']);
                    $entry->setMatchId($match->getMatchId());
                    self::$em->merge($entry);
                    unset($entry);

                    $stats = $player->xpath('Stat');
                    foreach($stats as $stat) {
                        $sa = $stat->attributes();
                        $stat_type = trim($sa['Type']);
                        if(false == ($player_stat = $repositories['player_stat']->findOneBy(array(
                                'matchId'=>$match_id,
                                'playerId'=>$player_id,
                                'statType'=>$stat_type
                            )))) {
                            $player_stat = new OptaMatchPlayerStat();
                        }
                        $player_stat->setPlayerId($player_id);
                        $player_stat->setMatchId($match_id);
                        $player_stat->setTeamId($team_array['team_id']);
                        $player_stat->setStatType($stat_type);
                        $player_stat->setStatValue(trim($stat));
                        self::$em->merge($player_stat);
                    }
                    unset($player_stat);
                }
            }

            $team_stats = $team->xpath('Stat');
            foreach($team_stats as $stat) {
                $sa = $stat->attributes();

                if(false == ($team_stat = $repositories['team_stat']->findOneBy(array(
                        'teamId'=>$team_array['team_id'],
                        'matchId'=>$match->getMatchId(),
                        'statType'=>trim($sa['Type'])
                    )))) {
                    $team_stat = new OptaMatchTeamStat();
                }
                $team_stat->setMatchId($match->getMatchId())
                    ->setTeamId($team_array['team_id'])
                    ->setStatType(trim($sa['Type']))
                    ->setStatValueFh(trim($sa['FH']))
                    ->setStatValueSh(trim($sa['SH']))
                    ->setStatValue(trim($stat[0]))
                ;
                self::$em->merge($team_stat);
                unset($team_stat);
            }

            /**
             * Bookings!
             */

            $bookings = $team->xpath('Booking');
            foreach($bookings as $booking) {
                $attr = $booking->attributes();
                $booking_id = trim($attr['uID']);
                if(false == ($book = $repositories['booking']->findOneBy(array(
                        'eventId'=>trim($attr['EventID']),
                    )))) {
                    $book = new OptaMatchBooking();
                }
                $book->setMatchId($match_id);
                $book->setTeamId($team_id);
                $book->setPlayerId(str_replace(StatsController::$prefixes['player'],'',trim($attr['PlayerRef'])));
                $book->setEventId(trim($attr['EventID']));
                $book->setEventNumber(trim($attr['EventNumber']));
                $book->setReason(trim($attr['Reason']));
                $book->setPeriod(trim($attr['Period']));
                $book->setCard(trim($attr['Card']));
                $book->setCardType(trim($attr['CardType']));
                $book->setBookingId($booking_id);
                $book->setBookingTime(trim($attr['Time']));
                $timestamp = new DateTime();
                $timestamp->setTimestamp(strtotime($attr['TimeStamp']));
                $book->setBookingTimestamp($timestamp);
                self::$em->merge($book);
                unset($book);

            }
            /**
             * Goals!
             */
            $goals = $team->xpath('Goal');
            foreach($goals as $goal) {
                $attr = $goal->attributes();
                $goal_id = trim($attr['uID']);
                if(false == ($gent = $repositories['goal']->findOneBy(array(
                        'eventId'=>trim($attr['EventID']),
                    )))) {
                    $gent = new OptaMatchGoal();
                }
                $gent->setMatchId($match_id);
                $gent->setEventId(trim($attr['EventID']));
                $gent->setEventNumber(trim($attr['EventNumber']));
                $gent->setPeriod(trim($attr['Period']));
                $gent->setGoalTime(trim($attr['Time']));
                $timestamp = new DateTime();
                $timestamp->setTimestamp(strtotime($attr['TimeStamp']));
                $gent->setGoalTimestamp($timestamp);
                $gent->setGoalId($goal_id);
                $gent->setPlayerId(str_replace(StatsController::$prefixes['player'],'',$attr['PlayerRef']));
                $gent->setGoalType(trim($attr['Type']));
                $gent->setTeamId($team_array['team_id']);
                self::$em->merge($gent);

                foreach($goal->xpath('Assist') as $assist) {
                    $player_id = str_replace(StatsController::$prefixes['player'],'',trim($assist));
                    if(false == ($gass = $repositories['goal_assist']->findOneBy(array(
                            'goalId'=>$goal_id,
                            'playerId'=>$player_id,
                        )))) {
                        $gass = new OptaMatchGoalAssist();
                    }
                    $gass->setGoalId($goal_id);
                    $gass->setPlayerId($player_id);
                    $gass->setAssistType('Assist');
                    $gass->setMatchId($match_id);
                    $gass->setTeamId($team_array['team_id']);
                    self::$em->merge($gass);
                    unset($gass);
                }

                foreach($goal->xpath('SecondAssist') as $assist) {
                    $player_id = str_replace(StatsController::$prefixes['player'],'',trim($assist));
                    if(false == ($gass = $repositories['goal_assist']->findOneBy(array(
                            'goalId'=>$goal_id,
                            'playerId'=>$player_id,
                        )))) {
                        $gass = new OptaMatchGoalAssist();
                    }
                    $gass->setGoalId($goal_id)
                        ->setPlayerId($player_id)
                        ->setAssistType('SecondAssist')
                        ->setMatchId($match_id)
                        ->setTeamId($team_array['team_id']);
                    self::$em->merge($gass);
                    unset($gass);
                }
                unset($gent);
            }
        }

        foreach($match_teams as $team) {
            if($team['side'] == 'Home') {
                $match->setHomeTeamId($team['team_id']);
                $match->setHomeTeamScore($team['score']);
            } else {
                $match->setAwayTeamId($team['team_id']);
                $match->setAwayTeamScore($team['score']);
            }
        }
        $match->setTeams($match_teams);

        /**
         * Process venue
         */
        if($venue = $xml->xpath('//Venue')[0]) {
            $va = $venue->attributes();
            $venue_id = str_replace(StatsController::$prefixes['venue'],'',$va['uID']);
            if(!array_key_exists($venue_id,self::$to_be_saved['venue']) && (false == ($v = $repositories['venue']->findOneBy(array(
                    'venueId'=>$venue_id
                ))))) {
                $v = new OptaVenue();
                $v->setVenueId($venue_id);
                if($venue_country = $venue->xpath('Country')) {
                    $v->setCountry(trim($venue_country[0]));
                }
                if($venue_name = $venue->xpath('Name')) {
                    $v->setName(trim($venue_name[0]));
                }
                self::$em->merge($v);
                self::$to_be_saved['venue'][$venue_id] = true;
                unset($v);
            }
            $match->setVenueId($venue_id);
        }

        /**
         * Teams!
         */

        $teams = $xml->xpath('/SoccerFeed/SoccerDocument/Team');
        foreach($teams as $team) {
            $attr = $team->attributes();
            $team_id = str_replace(StatsController::$prefixes['team'],'',$attr['uID']);
            if(false == ($t = $repositories['team']->findOneBy(array(
                        'teamId'=>$team_id
                    )))) {
                $t = new OptaTeam();
            }
            if(!array_key_exists($team_id,self::$to_be_saved['team'])) {
                $t->setTeamId(str_replace(StatsController::$prefixes['team'],'',trim($attr['uID'])));
                $t->setName(trim($team->xpath('Name')[0]));
                if($team->xpath('Country')) {
                    $t->setCountry(trim($team->xpath('Country')[0]));
                }
                self::$em->merge($t);
                self::$to_be_saved['team'][$team_id] = true;
            }
            unset($t);
        }

        /**
         * Process officials
         */
        if($match_official = $xml->xpath('//MatchOfficial')) {
            $official_id = str_replace(StatsController::$prefixes['official'],'',$match_official[0]->attributes()['uID']);
            if(false == ($official = $repositories['match_official']->findOneBy(
                    array('matchId'=>$match->getMatchId(),'officialId'=>$official_id)
                ))) {
                $official = new OptaMatchOfficial();
            }
            $official->setMatchId($match->getMatchId());
            $official->setOfficialId($official_id);
            $official->setOfficialType('Main');
            self::$em->merge($official);
            unset($official);

            if(!array_key_exists($official_id,self::$to_be_saved['official'])) {
                if(false == ($official = $repositories['official']->findOneBy(array('officialId'=>$official_id)))) {
                    $official = new OptaOfficial();
                    self::$to_be_saved['official'][$official_id] = true;
                }
                $official->setOfficialId($official_id);
                $official->setFirstName(trim($match_official[0]->xpath('OfficialName/First')[0]));
                $official->setLastName(trim($match_official[0]->xpath('OfficialName/Last')[0]));
                self::$em->merge($official);
                unset($official);
            }

            $assistants = $xml->xpath('//AssistantOfficial');
            foreach($assistants as $assistant) {
                $official_id = str_replace(StatsController::$prefixes['official'],'',$assistant->attributes()['uID']);
                if(false == ($official = $repositories['match_official']->findOneBy(
                        array('matchId'=>$match->getMatchId(),'officialId'=>$official_id)
                    ))) {
                    $official = new OptaMatchOfficial();
                }
                $official->setOfficialId($official_id);
                $official->setMatchId($match->getMatchId());
                $official->setOfficialType(trim($assistant->attributes()['Type']));
                self::$em->merge($official);

                if(!array_key_exists($official_id,self::$to_be_saved['official'])) {
                    if(false == ($official = $repositories['official']->findOneBy(array('officialId'=>$official_id)))) {
                        $official = new OptaOfficial();
                        self::$to_be_saved['official'][$official_id] = true;
                    }
                    $official->setOfficialId($official_id);
                    $official->setFirstName(trim($assistant->attributes()['FirstName']));
                    $official->setLastName(trim($assistant->attributes()['LastName']));
                    self::$em->merge($official);
                    unset($official);
                }


            }
            unset($official);
        }

        self::$em->merge($match);
    }
    static public function resetToBeSaved()
    {
        self::$to_be_saved = array('player'=>array(),'venue'=>array(),'official'=>array(),'team'=>array());
    }
    public function repositories()
    {
        $repositories = self::$repositories;
        if(!isset($repositories['match'])) {
            $repositories['match'] = $this->getDoctrine()->getRepository('UTCStatsBundle:OptaMatch');
        }
        if(!isset($repositories['lineup'])) {
            $repositories['lineup'] = $this->getDoctrine()->getRepository('UTCStatsBundle:OptaMatchLineup');
        }
        if(!isset($repositories['player_stat'])) {
            $repositories['player_stat'] = $this->getDoctrine()->getRepository('UTCStatsBundle:OptaMatchPlayerStat');
        }
        if(!isset($repositories['team_stat'])) {
            $repositories['team_stat'] = $this->getDoctrine()->getRepository('UTCStatsBundle:OptaMatchTeamStat');
        }
        if(!isset($repositories['players'])) {
            $repositories['players'] = $this->getDoctrine()->getRepository('UTCStatsBundle:OptaPlayer');
        }
        if(!isset($repositories['venue'])) {
            $repositories['venue'] = $this->getDoctrine()->getRepository('UTCStatsBundle:OptaVenue');
        }
        if(!isset($repositories['match_official'])) {
            $repositories['match_official'] = $this->getDoctrine()->getRepository('UTCStatsBundle:OptaMatchOfficial');
        }
        if(!isset($repositories['official'])) {
            $repositories['official'] = $this->getDoctrine()->getRepository('UTCStatsBundle:OptaOfficial');
        }
        if(!isset($repositories['goal'])) {
            $repositories['goal'] = $this->getDoctrine()->getRepository('UTCStatsBundle:OptaMatchGoal');
        }
        if(!isset($repositories['goal_assist'])) {
            $repositories['goal_assist'] = $this->getDoctrine()->getRepository('UTCStatsBundle:OptaMatchGoalAssist');
        }
        if(!isset($repositories['booking'])) {
            $repositories['booking'] = $this->getDoctrine()->getRepository('UTCStatsBundle:OptaMatchBooking');
        }
        if(!isset($repositories['team'])) {
            $repositories['team'] = $this->getDoctrine()->getRepository('UTCStatsBundle:OptaTeam');
        }
        self::$repositories = $repositories;
        return self::$repositories;
    }
}
