<?php

namespace UTC\StatsBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * OptaOfficial
 */
class OptaOfficial
{
    /**
     * @var integer
     */
    private $id;

    /**
     * @var integer
     */
    private $officialId;

    /**
     * @var string
     */
    private $firstName;

    /**
     * @var string
     */
    private $lastName;


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
     * Set officialId
     *
     * @param integer $officialId
     * @return OptaOfficial
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
     * Set firstName
     *
     * @param string $firstName
     * @return OptaOfficial
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
     * @return OptaOfficial
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
}
