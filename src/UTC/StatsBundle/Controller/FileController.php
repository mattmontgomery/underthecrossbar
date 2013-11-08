<?php

namespace UTC\StatsBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use \Exception;
use Symfony\Component\DependencyInjection\ContainerAwareInterface;
use UTC\StatsBundle\Entity\FileStats;
use UTC\StatsBundle\Entity\FileStatsRepository;

class FileController extends Controller implements ContainerAwareInterface
{
    protected $data_folder = '';
    protected $competition_id = null;
    protected $base_url = '';

    /**
     * @param string $data_folder
     * @param null $competition_id
     * @param string $base_url
     */
    public function __construct($data_folder = '/usr/local/data/opta',$competition_id = null,$base_url = 'http://www.mlssoccer.com/sites/all/modules/custom/mls_matchcenter/mls-gamematrix/dat/stats/')
    {
        $this->setDataFolder($data_folder);
        $this->setCompetitionId($competition_id);
        $this->setBaseUrl($base_url);
    }

    /**
     * @param $filename
     * @return array
     */
    public function parseFileStructure($filename)
    {
        $parts = explode('-',$filename);
        return array(
            'prefix'=>$parts[0],
            'competition_id'=>$parts[1],
            'season'=>$parts[2],
            'match_id'=>$parts[3],
            'match_number'=>str_replace('f','',$parts[3]),
            'file'=>$parts[4]
        );
    }

    /**
     * @param $file_parts
     * @return string
     */
    public function compileFileName(&$file_parts)
    {
        $file_parts['match_id'] = 'f'.$file_parts['match_number'];
        return "{$file_parts['prefix']}-{$file_parts['competition_id']}-{$file_parts['season']}-f{$file_parts['match_number']}-{$file_parts['file']}";
    }
    /**
     * @return array
     * @throws \Exception
     */
    public function getMostRecent()
    {
        if(!$this->checkDirectory()) {
            throw new Exception('Directory could not be loaded');
        }
        $files = $this->loadDirectory();
        $new_files = array_map(array($this,'parseFileStructure'),$files);
        foreach($files as $filename) {
            $this->parseFileStructure($filename);
        }
        uasort($new_files, function($a, $b){ return strcasecmp($a['match_id'], $b['match_id']); });
        if($a = array_reverse($new_files,false)) {
            return $a[0];
        } else {
            throw new Exception('No files found');
        }
    }

    public function getProcessed()
    {
        $re = $this->getDoctrine()->getRepository('UTCStatsBundle:FileStats');
        return $re->findBy(array('isProcessed'=>true));
    }

    public function getUnprocessed($check_dir = false)
    {
        if(!$this->checkDirectory()) {
            throw new Exception('Directory could not be loaded');
        }
        if($check_dir === false) {
            $re = $this->getDoctrine()->getRepository('UTCStatsBundle:FileStats');
            return array_map(function($obj) { return $obj->getFilename(); },$re->findBy(array('isProcessed'=>false)));
        }
        $files = $this->loadDirectory();
        $processed = array_map(function($obj) { return $obj->getFilename(); },$this->getProcessed());
        return array_diff($files,$processed);
    }
    /**
     * @return array
     */
    public function loadDirectory()
    {
        $dir = $this->getDataFolder();
        return array_diff(scandir($dir),array('.','..','.DS_Store'));
    }

    /**
     * @param $filename
     * @return string
     */
    public function loadFile($filename)
    {
        return file_get_contents($this->getDataFolder() . '/' . $filename);
    }

    /**
     * @return bool
     */
    public function checkDirectory()
    {
        if(is_dir($this->getDataFolder())) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * @param $filename
     * @param null $base_url
     * @return bool
     * @throws Exception
     */
    public function download($filename,$base_url = null)
    {
        $url = ($base_url === null ? $this->getBaseUrl() : $base_url) . $filename;
        if(false === ($file = @file_get_contents($url))) {
            return false;
        }
        if(false === file_put_contents($this->getDataFolder() .'/'.$filename,$file)) {
            throw new Exception('Could not save file');
        }
        return true;
    }

    /**
     * @param string $data_folder
     */
    public function setDataFolder($data_folder)
    {
        $this->data_folder = $data_folder;
    }

    /**
     * @return string
     */
    public function getDataFolder()
    {
        return $this->data_folder;
    }

    /**
     * @param null $competition_id
     */
    public function setCompetitionId($competition_id)
    {
        $this->competition_id = $competition_id;
    }

    /**
     * @return null
     */
    public function getCompetitionId()
    {
        return $this->competition_id;
    }

    /**
     * @param string $base_url
     */
    public function setBaseUrl($base_url)
    {
        $this->base_url = $base_url;
    }

    /**
     * @return string
     */
    public function getBaseUrl()
    {
        return $this->base_url;
    }




}