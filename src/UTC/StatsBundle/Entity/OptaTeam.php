<?php

namespace UTC\StatsBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * OptaTeam
 */
class OptaTeam
{
    /**
     * @var integer
     */
    private $id;

    /**
     * @var integer
     */
    private $teamId;

    /**
     * @var string
     */
    private $country;

    /**
     * @var string
     */
    private $name;


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
     * Set teamId
     *
     * @param integer $teamId
     * @return OptaTeam
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
     * Set country
     *
     * @param string $country
     * @return OptaTeam
     */
    public function setCountry($country)
    {
        $this->country = $country;
    
        return $this;
    }

    /**
     * Get country
     *
     * @return string 
     */
    public function getCountry()
    {
        return $this->country;
    }

    /**
     * Set name
     *
     * @param string $name
     * @return OptaTeam
     */
    public function setName($name)
    {
        $this->name = $name;
    
        return $this;
    }

    /**
     * Get name
     *
     * @return string 
     */
    public function getName()
    {
        return $this->name;
    }
}
