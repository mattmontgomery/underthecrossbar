<?php

namespace UTC\StatsBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * OptaMatchBooking
 */
class OptaMatchBooking
{
    /**
     * @var integer
     */
    private $id;

    /**
     * @var integer
     */
    private $bookingId;

    /**
     * @var string
     */
    private $card;

    /**
     * @var string
     */
    private $cardType;

    /**
     * @var integer
     */
    private $eventId;


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
     * Set bookingId
     *
     * @param integer $bookingId
     * @return OptaMatchBooking
     */
    public function setBookingId($bookingId)
    {
        $this->bookingId = $bookingId;
    
        return $this;
    }

    /**
     * Get bookingId
     *
     * @return integer 
     */
    public function getBookingId()
    {
        return $this->bookingId;
    }

    /**
     * Set card
     *
     * @param string $card
     * @return OptaMatchBooking
     */
    public function setCard($card)
    {
        $this->card = $card;
    
        return $this;
    }

    /**
     * Get card
     *
     * @return string 
     */
    public function getCard()
    {
        return $this->card;
    }

    /**
     * Set cardType
     *
     * @param string $cardType
     * @return OptaMatchBooking
     */
    public function setCardType($cardType)
    {
        $this->cardType = $cardType;
    
        return $this;
    }

    /**
     * Get cardType
     *
     * @return string 
     */
    public function getCardType()
    {
        return $this->cardType;
    }

    /**
     * Set eventId
     *
     * @param integer $eventId
     * @return OptaMatchBooking
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
     * @var integer
     */
    private $matchId;

    /**
     * @var integer
     */
    private $playerId;

    /**
     * @var integer
     */
    private $eventNumber;

    /**
     * @var string
     */
    private $reason;

    /**
     * @var string
     */
    private $period;

    /**
     * @var integer
     */
    private $bookingTime;

    /**
     * @var \DateTime
     */
    private $bookingTimestamp;


    /**
     * Set matchId
     *
     * @param integer $matchId
     * @return OptaMatchBooking
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
     * Set playerId
     *
     * @param integer $playerId
     * @return OptaMatchBooking
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
     * Set eventNumber
     *
     * @param integer $eventNumber
     * @return OptaMatchBooking
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
     * Set reason
     *
     * @param string $reason
     * @return OptaMatchBooking
     */
    public function setReason($reason)
    {
        $this->reason = $reason;
    
        return $this;
    }

    /**
     * Get reason
     *
     * @return string 
     */
    public function getReason()
    {
        return $this->reason;
    }

    /**
     * Set period
     *
     * @param string $period
     * @return OptaMatchBooking
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
     * Set bookingTime
     *
     * @param integer $bookingTime
     * @return OptaMatchBooking
     */
    public function setBookingTime($bookingTime)
    {
        $this->bookingTime = $bookingTime;
    
        return $this;
    }

    /**
     * Get bookingTime
     *
     * @return integer 
     */
    public function getBookingTime()
    {
        return $this->bookingTime;
    }

    /**
     * Set bookingTimestamp
     *
     * @param \DateTime $bookingTimestamp
     * @return OptaMatchBooking
     */
    public function setBookingTimestamp($bookingTimestamp)
    {
        $this->bookingTimestamp = $bookingTimestamp;
    
        return $this;
    }

    /**
     * Get bookingTimestamp
     *
     * @return \DateTime 
     */
    public function getBookingTimestamp()
    {
        return $this->bookingTimestamp;
    }
    /**
     * @var integer
     */
    private $teamId;


    /**
     * Set teamId
     *
     * @param integer $teamId
     * @return OptaMatchBooking
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