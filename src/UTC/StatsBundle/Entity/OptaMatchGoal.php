<?php

namespace UTC\StatsBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * OptaMatchGoal
 */
class OptaMatchGoal
{
    /**
     * @var integer
     */
    private $id;

    /**
     * @var integer
     */
    private $eventId;

    /**
     * @var integer
     */
    private $eventNumber;

    /**
     * @var string
     */
    private $period;

    /**
     * @var integer
     */
    private $playerId;

    /**
     * @var integer
     */
    private $goalTime;

    /**
     * @var \DateTime
     */
    private $goalTimestamp;

    /**
     * @var string
     */
    private $goalType;

    /**
     * @var string
     */
    private $goalId;


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
     * Set eventId
     *
     * @param integer $eventId
     * @return OptaMatchGoal
     */
    public function setEventId($eventId)
    {
        $this->eventId = $eventId;
    
        return $this;
    }

    /**
     * Get eventId
     *
     * @return integer 
     */
    public function getEventId()
    {
        return $this->eventId;
    }

    /**
     * Set eventNumber
     *
     * @param integer $eventNumber
     * @return OptaMatchGoal
     */
    public function setEventNumber($eventNumber)
    {
        $this->eventNumber = $eventNumber;
    
        return $this;
    }

    /**
     * Get eventNumber
     *
     * @return integer 
     */
    public function getEventNumber()
    {
        return $this->eventNumber;
    }

    /**
     * Set period
     *
     * @param string $period
     * @return OptaMatchGoal
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
     * Set playerId
     *
     * @param integer $playerId
     * @return OptaMatchGoal
     */
    public function setPlayerId($playerId)
    {
        $this->playerId = $playerId;
    
        return $this;
    }

    /**
     * Get playerId
     *
     * @return integer 
     */
    public function getPlayerId()
    {
        return $this->playerId;
    }

    /**
     * Set goalTime
     *
     * @param integer $goalTime
     * @return OptaMatchGoal
     */
    public function setGoalTime($goalTime)
    {
        $this->goalTime = $goalTime;
    
        return $this;
    }

    /**
     * Get goalTime
     *
     * @return integer 
     */
    public function getGoalTime()
    {
        return $this->goalTime;
    }

    /**
     * Set goalTimestamp
     *
     * @param \DateTime $goalTimestamp
     * @return OptaMatchGoal
     */
    public function setGoalTimestamp($goalTimestamp)
    {
        $this->goalTimestamp = $goalTimestamp;
    
        return $this;
    }

    /**
     * Get goalTimestamp
     *
     * @return \DateTime 
     */
    public function getGoalTimestamp()
    {
        return $this->goalTimestamp;
    }

    /**
     * Set goalType
     *
     * @param string $goalType
     * @return OptaMatchGoal
     */
    public function setGoalType($goalType)
    {
        $this->goalType = $goalType;
    
        return $this;
    }

    /**
     * Get goalType
     *
     * @return string 
     */
    public function getGoalType()
    {
        return $this->goalType;
    }

    /**
     * Set goalId
     *
     * @param string $goalId
     * @return OptaMatchGoal
     */
    public function setGoalId($goalId)
    {
        $this->goalId = $goalId;
    
        return $this;
    }

    /**
     * Get goalId
     *
     * @return string 
     */
    public function getGoalId()
    {
        return $this->goalId;
    }
    /**
     * @var integer
     */
    private $matchId;


    /**
     * Set matchId
     *
     * @param integer $matchId
     * @return OptaMatchGoal
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
     * @var integer
     */
    private $teamId;


    /**
     * Set teamId
     *
     * @param integer $teamId
     * @return OptaMatchGoal
     */
    public function setTeamId($teamId)
    {
        $this->teamId = $teamId;
    
        return $this;
    }

    /**
     * Get teamId
     *
     * @return integer 
     */
    public function getTeamId()
    {
        return $this->teamId;
    }
}