<?php

namespace UTC\StatsBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * FileStats
 */
class FileStats
{
    /**
     * @var integer
     */
    private $id;

    /**
     * @var string
     */
    private $filename;

    /**
     * @var boolean
     */
    private $isProcessed;

    /**
     * @var \DateTime
     */
    private $timestamp;


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
     * Set filename
     *
     * @param string $filename
     * @return FileStats
     */
    public function setFilename($filename)
    {
        $this->filename = $filename;
    
        return $this;
    }

    /**
     * Get filename
     *
     * @return string 
     */
    public function getFilename()
    {
        return $this->filename;
    }

    /**
     * Set isProcessed
     *
     * @param boolean $isProcessed
     * @return FileStats
     */
    public function setIsProcessed($isProcessed)
    {
        $this->isProcessed = $isProcessed;
    
        return $this;
    }

    /**
     * Get isProcessed
     *
     * @return boolean 
     */
    public function getIsProcessed()
    {
        return $this->isProcessed;
    }

    /**
     * Set timestamp
     *
     * @param \DateTime $timestamp
     * @return FileStats
     */
    public function setTimestamp($timestamp)
    {
        $this->timestamp = $timestamp;
    
        return $this;
    }

    /**
     * Get timestamp
     *
     * @return \DateTime 
     */
    public function getTimestamp()
    {
        return $this->timestamp;
    }
    /**
     * @var integer
     */
    private $match_id;


    /**
     * Set match_id
     *
     * @param integer $matchId
     * @return FileStats
     */
    public function setMatchId($matchId)
    {
        $this->match_id = $matchId;
    
        return $this;
    }

    /**
     * Get match_id
     *
     * @return integer 
     */
    public function getMatchId()
    {
        return $this->match_id;
    }
    /**
     * @var string
     */
    private $file_type;


    /**
     * Set file_type
     *
     * @param string $fileType
     * @return FileStats
     */
    public function setFileType($fileType)
    {
        $this->file_type = $fileType;
    
        return $this;
    }

    /**
     * Get file_type
     *
     * @return string 
     */
    public function getFileType()
    {
        return $this->file_type;
    }
}