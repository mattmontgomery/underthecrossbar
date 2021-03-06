<?php

namespace UTC\StatsBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * OptaMatchGoalAssist
 */
class OptaMatchGoalAssist
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
     * @var string
     */
    private $goalId;

    /**
     * @var integer
     */
    private $playerId;


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
     * @return OptaMatchGoalAssist
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
     * Set goalId
     *
     * @param string $goalId
     * @return OptaMatchGoalAssist
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
     * Set playerId
     *
     * @param integer $playerId
     * @return OptaMatchGoalAssist
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
     * @var string
     */
    private $assistType;


    /**
     * Set assistType
     *
     * @param string $assistType
     * @return OptaMatchGoalAssist
     */
    public function setAssistType($assistType)
    {
        $this->assistType = $assistType;
    
        return $this;
    }

    /**
     * Get assistType
     *
     * @return string 
     */
    public function getAssistType()
    {
        return $this->assistType;
    }
    /**
     * @var integer
     */
    private $teamId;


    /**
     * Set teamId
     *
     * @param integer $teamId
     * @return OptaMatchGoalAssist
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