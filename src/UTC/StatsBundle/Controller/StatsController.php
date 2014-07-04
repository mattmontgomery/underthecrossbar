<?php

namespace UTC\StatsBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class StatsController extends Controller
{
    static $players = array();
    static $prefixes = array(
        'match'=>'f',
        'competition'=>'c',
        'team'=>'t',
        'player'=>'p',
        'venue'=>'v',
        'official'=>'o',
    );
    public function loadPlayers($search = [],$plain = false)
    {
        $qb = $this->getDoctrine()->getManager()->createQueryBuilder('UTCStatsBundle:OptaPlayer');
        $qb = $qb
            ->select('o')
            ->from('UTCStatsBundle:OptaPlayer','o')
        ;
        $criteria = [];
        foreach($search as $key=>$val) {
            $qb = $qb->orWhere("o.{$key} LIKE :{$key}");
            $qb = $qb->setParameter($key, "%{$val}%");
        }
        $qb = $qb->orderBy('o.lastName');
        $players = $qb->getQuery()->getResult();
        if($plain === true) {
            return array_map(function($player) { return $player; },$players);
        }
        return array_map(function($player) { return array($player->getPlayerId()=>$player); },$players);
    }
    public function loadTeams($search = [],$plain = false)
    {
        $qb = $this->getDoctrine()->getManager()->createQueryBuilder('UTCStatsBundle:OptaTeam');
//        $qb = $this->createQueryBuilder('o');
        $qb = $qb
            ->select('o')
            ->from('UTCStatsBundle:OptaTeam','o')
        ;
        $criteria = [];
        foreach($search as $key=>$val) {
            $qb = $qb->orWhere("o.{$key} LIKE :{$key}");
            $qb = $qb->setParameter($key, "%{$val}%");
        }
        $qb = $qb->orderBy('o.name');
        $teams = $qb->getQuery()->getResult();
        if($plain === true) {
            return array_map(function($team) { return $team; },$teams);
        }
        $t = array();
        array_map(function($team) use (&$t) { $t[$team->getTeamId()] = $team; },$teams);
        return $t;
    }
    public function getPlayerStats($player,$stats = array('mins_played'),$options = array())
    {
        $matches = $this->getPlayerMatches($player);
        $match_ids = array_map(function($match) { return $match->getMatchId(); },$matches);

        $r_stats = $this->getDoctrine()->getRepository('UTCStatsBundle:OptaMatchPlayerStat');
        $q = $this->getDoctrine()->getManager()->createQueryBuilder('UTCStatsBundle:OptaMatchPlayerStat');
        $q
            ->select(array('s.matchId, s.statType, s.teamId, s.statValue, m.matchDate, m.matchId, s.teamId, m.resultWinner'))
            ->from('UTCStatsBundle:OptaMatchPlayerStat','s')
            ->where($q->expr()->andX(
                $q->expr()->eq('s.playerId',$player),
                $q->expr()->in('s.matchId',$match_ids),
                $q->expr()->in('s.statType',$stats)
            ))
            ->innerJoin('UTCStatsBundle:OptaMatch','m','WITH','m.matchId = s.matchId')
            ->orderBy('m.matchId')
        ;

        $query = $q->getQuery();
        $result = $query->getArrayResult();
        return $result;
    }
    public function getPlayerMatches($player)
    {
        return $this->getDoctrine()->getRepository('UTCStatsBundle:OptaMatchLineup')->findBy(array('playerId'=>$player));
    }
    public function getTeamStats($team,$stats = array('touches'),$options = array())
    {
        $matches = $this->getTeamMatches($team,($options['competition'] ?: null),($options['season'] ?: null));
        foreach($matches as $id=>$match) {
            $s = array();
            $stats = $this->getDoctrine()->getRepository('UTCStatsBundle:OptaMatchTeamStat')->findBy(array('matchId'=>$id,'teamId'=>$team));
            $statsArray = array_walk($stats, function($stat) use (&$s) {
                $s[$stat->getStatType()] = $stat;
            });
            $match->stats = $s;
        }
        return $matches;
    }
    public function getTeamMatches($team,$competition = null,$season = null)
    {
        $params = array();
        if($competition !== null) {
            $params['competitionId'] = $competition;
        }
        if($season !== null) {
            $params['seasonId'] = $season;
        }
        $homeParams = array_merge($params,array('homeTeamId'=>$team));
        $awayParams = array_merge($params,array('awayTeamId'=>$team));
        $matches = array();
        $home = $this->getDoctrine()->getRepository('UTCStatsBundle:OptaMatch')->findBy($homeParams);
        $away = $this->getDoctrine()->getRepository('UTCStatsBundle:OptaMatch')->findBy($awayParams);
        foreach($home as $match) {
            $id = $match->getMatchId();
            $matches[$id] = $match;
        }
        foreach($away as $match) {
            $matches[$match->getMatchId()] = $match;
        }
        asort($matches);
        return $matches;
    }
}
