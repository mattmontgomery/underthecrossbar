<?php

namespace UTC\StatsBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * OptaMatchOfficial
 */
class OptaMatchOfficial
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
    private $officialId;

    /**
     * @var string
     */
    private $officialType;


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
     * @return OptaMatchOfficial
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
     * Set officialId
     *
     * @param integer $officialId
     * @return OptaMatchOfficial
     */
    public function setOfficialId($officialId)
    {
        $this->officialId = $officialId;
    
        return $this;
    }

    /**
     * Get officialId
     *
     * @return integer 
     */
    public function getOfficialId()
    {
        return $this->officialId;
    }

    /**
     * Set officialType
     *
     * @param string $officialType
     * @return OptaMatchOfficial
     */
    public function setOfficialType($officialType)
    {
        $this->officialType = $officialType;
    
        return $this;
    }

    /**
     * Get officialType
     *
     * @return string 
     */
    public function getOfficialType()
    {
        return $this->officialType;
    }
}