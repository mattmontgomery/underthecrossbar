<?php

namespace UTC\StatsBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * OptaPlayer
 */
class OptaPlayer
{
    /**
     * @var integer
     */
    private $id;

    /**
     * @var integer
     */
    private $playerId;

    /**
     * @var string
     */
    private $firstName;

    /**
     * @var string
     */
    private $lastName;

    /**
     * @var string
     */
    private $knownName;


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
     * Set playerId
     *
     * @param integer $playerId
     * @return OptaPlayer
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
     * Set firstName
     *
     * @param string $firstName
     * @return OptaPlayer
     */
    public function setFirstName($firstName)
    {
        $this->firstName = $firstName;
    
        return $this;
    }

    /**
     * Get firstName
     *
     * @return string 
     */
    public function getFirstName()
    {
        return $this->firstName;
    }

    /**
     * Set lastName
     *
     * @param string $lastName
     * @return OptaPlayer
     */
    public function setLastName($lastName)
    {
        $this->lastName = $lastName;
    
        return $this;
    }

    /**
     * Get lastName
     *
     * @return string 
     */
    public function getLastName()
    {
        return $this->lastName;
    }

    /**
     * Set knownName
     *
     * @param string $knownName
     * @return OptaPlayer
     */
    public function setKnownName($knownName)
    {
        $this->knownName = $knownName;
    
        return $this;
    }

    /**
     * Get knownName
     *
     * @return string 
     */
    public function getKnownName()
    {
        return $this->knownName;
    }
}
