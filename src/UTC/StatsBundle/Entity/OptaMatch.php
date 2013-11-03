<?php

namespace UTC\StatsBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * OptaMatch
 */
class OptaMatch
{
    /**
     * @var integer
     */
    private $id;

    /**
     * @var integer
     */
    private $matchId;

    /**
     * @var integer
     */
    private $competitionId;

    /**
     * @var array
     */
    private $teams;

    /**
     * @var string
     */
    private $seasonId;

    /**
     * @var integer
     */
    private $matchDay;


    /**
     * Get id
     *
     * @return integer 
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set matchId
     *
     * @param integer $matchId
     * @return OptaMatch
     */
    public function setMatchId($matchId)
    {
        $this->matchId = $matchId;
    
        return $this;
    }

    /**
     * Get matchId
     *
     * @return integer 
     */
    public function getMatchId()
    {
        return $this->matchId;
    }

    /**
     * Set competitionId
     *
     * @param integer $competitionId
     * @return OptaMatch
     */
    public function setCompetitionId($competitionId)
    {
        $this->competitionId = $competitionId;
    
        return $this;
    }

    /**
     * Get competitionId
     *
     * @return integer 
     */
    public function getCompetitionId()
    {
        return $this->competitionId;
    }

    /**
     * Set teams
     *
     * @param array $teams
     * @return OptaMatch
     */
    public function setTeams($teams)
    {
        $this->teams = $teams;
    
        return $this;
    }

    /**
     * Get teams
     *
     * @return array 
     */
    public function getTeams()
    {
        return $this->teams;
    }

    /**
     * Set seasonId
     *
     * @param string $seasonId
     * @return OptaMatch
     */
    public function setSeasonId($seasonId)
    {
        $this->seasonId = $seasonId;
    
        return $this;
    }

    /**
     * Get seasonId
     *
     * @return string 
     */
    public function getSeasonId()
    {
        return $this->seasonId;
    }

    /**
     * Set matchday
     *
     * @param integer $matchday
     * @return OptaMatch
     */
    public function setMatchDay($matchday)
    {
        $this->matchDay = $matchday;
    
        return $this;
    }

    /**
     * Get matchday
     *
     * @return integer 
     */
    public function getMatchDay()
    {
        return $this->matchDay;
    }
    /**
     * @var integer
     */
    private $home_team_id;

    /**
     * @var integer
     */
    private $away_team_id;

    /**
     * @var integer
     */
    private $home_team_score;

    /**
     * @var integer
     */
    private $away_team_score;


    /**
     * Set home_team_id
     *
     * @param integer $homeTeamId
     * @return OptaMatch
     */
    public function setHomeTeamId($homeTeamId)
    {
        $this->home_team_id = $homeTeamId;
    
        return $this;
    }

    /**
     * Get home_team_id
     *
     * @return integer 
     */
    public function getHomeTeamId()
    {
        return $this->home_team_id;
    }

    /**
     * Set away_team_id
     *
     * @param integer $awayTeamId
     * @return OptaMatch
     */
    public function setAwayTeamId($awayTeamId)
    {
        $this->away_team_id = $awayTeamId;
    
        return $this;
    }

    /**
     * Get away_team_id
     *
     * @return integer 
     */
    public function getAwayTeamId()
    {
        return $this->away_team_id;
    }

    /**
     * Set home_team_score
     *
     * @param integer $homeTeamScore
     * @return OptaMatch
     */
    public function setHomeTeamScore($homeTeamScore)
    {
        $this->home_team_score = $homeTeamScore;
    
        return $this;
    }

    /**
     * Get home_team_score
     *
     * @return integer 
     */
    public function getHomeTeamScore()
    {
        return $this->home_team_score;
    }

    /**
     * Set away_team_score
     *
     * @param integer $awayTeamScore
     * @return OptaMatch
     */
    public function setAwayTeamScore($awayTeamScore)
    {
        $this->away_team_score = $awayTeamScore;
    
        return $this;
    }

    /**
     * Get away_team_score
     *
     * @return integer 
     */
    public function getAwayTeamScore()
    {
        return $this->away_team_score;
    }
    /**
     * @var integer
     */
    private $venueId;


    /**
     * Set venueId
     *
     * @param integer $venueId
     * @return OptaMatch
     */
    public function setVenueId($venueId)
    {
        $this->venueId = $venueId;
    
        return $this;
    }

    /**
     * Get venueId
     *
     * @return integer 
     */
    public function getVenueId()
    {
        return $this->venueId;
    }
    /**
     * @var \DateTime
     */
    private $matchDate;

    /**
     * @var string
     */
    private $matchType;

    /**
     * @var string
     */
    private $period;

    /**
     * @var string
     */
    private $weather;

    /**
     * @var integer
     */
    private $attendance;

    /**
     * @var string
     */
    private $resultType;

    /**
     * @var integer
     */
    private $resultWinner;


    /**
     * Set matchDate
     *
     * @param \DateTime $matchDate
     * @return OptaMatch
     */
    public function setMatchDate($matchDate)
    {
        $this->matchDate = $matchDate;
    
        return $this;
    }

    /**
     * Get matchDate
     *
     * @return \DateTime 
     */
    public function getMatchDate()
    {
        return $this->matchDate;
    }

    /**
     * Set matchType
     *
     * @param string $matchType
     * @return OptaMatch
     */
    public function setMatchType($matchType)
    {
        $this->matchType = $matchType;
    
        return $this;
    }

    /**
     * Get matchType
     *
     * @return string 
     */
    public function getMatchType()
    {
        return $this->matchType;
    }

    /**
     * Set period
     *
     * @param string $period
     * @return OptaMatch
     */
    public function setPeriod($period)
    {
        $this->period = $period;
    
        return $this;
    }

    /**
     * Get period
     *
     * @return string 
     */
    public function getPeriod()
    {
        return $this->period;
    }

    /**
     * Set weather
     *
     * @param string $weather
     * @return OptaMatch
     */
    public function setWeather($weather)
    {
        $this->weather = $weather;
    
        return $this;
    }

    /**
     * Get weather
     *
     * @return string 
     */
    public function getWeather()
    {
        return $this->weather;
    }

    /**
     * Set attendance
     *
     * @param integer $attendance
     * @return OptaMatch
     */
    public function setAttendance($attendance)
    {
        $this->attendance = $attendance;
    
        return $this;
    }

    /**
     * Get attendance
     *
     * @return integer 
     */
    public function getAttendance()
    {
        return $this->attendance;
    }

    /**
     * Set resultType
     *
     * @param string $resultType
     * @return OptaMatch
     */
    public function setResultType($resultType)
    {
        $this->resultType = $resultType;
    
        return $this;
    }

    /**
     * Get resultType
     *
     * @return string 
     */
    public function getResultType()
    {
        return $this->resultType;
    }

    /**
     * Set resultWinner
     *
     * @param integer $resultWinner
     * @return OptaMatch
     */
    public function setResultWinner($resultWinner)
    {
        $this->resultWinner = $resultWinner;
    
        return $this;
    }

    /**
     * Get resultWinner
     *
     * @return integer 
     */
    public function getResultWinner()
    {
        return $this->resultWinner;
    }
}