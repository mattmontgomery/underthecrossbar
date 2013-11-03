<?php

namespace UTC\StatsBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * OptaMatchLineup
 */
class OptaMatchLineup
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
    private $teamId;

    /**
     * @var integer
     */
    private $playerId;

    /**
     * @var string
     */
    private $position;

    /**
     * @var integer
     */
    private $shirtNumber;

    /**
     * @var string
     */
    private $status;


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
     * @param int $matchId
     */
    public function setMatchId($matchId)
    {
        $this->matchId = $matchId;
    }

    /**
     * @return int
     */
    public function getMatchId()
    {
        return $this->matchId;
    }


    /**
     * Set teamId
     *
     * @param integer $teamId
     * @return OptaMatchLineup
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

    /**
     * Set playerId
     *
     * @param integer $playerId
     * @return OptaMatchLineup
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
     * Set position
     *
     * @param string $position
     * @return OptaMatchLineup
     */
    public function setPosition($position)
    {
        $this->position = $position;
    
        return $this;
    }

    /**
     * Get position
     *
     * @return string 
     */
    public function getPosition()
    {
        return $this->position;
    }

    /**
     * Set shirtNumber
     *
     * @param integer $shirtNumber
     * @return OptaMatchLineup
     */
    public function setShirtNumber($shirtNumber)
    {
        $this->shirtNumber = $shirtNumber;
    
        return $this;
    }

    /**
     * Get shirtNumber
     *
     * @return integer 
     */
    public function getShirtNumber()
    {
        return $this->shirtNumber;
    }

    /**
     * Set status
     *
     * @param string $status
     * @return OptaMatchLineup
     */
    public function setStatus($status)
    {
        $this->status = $status;
    
        return $this;
    }

    /**
     * Get status
     *
     * @return string 
     */
    public function getStatus()
    {
        return $this->status;
    }
}
