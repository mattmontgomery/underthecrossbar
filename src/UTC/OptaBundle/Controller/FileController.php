<?php

namespace UTC\OptaBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use \DateTime;

class FileController extends Controller
{
    static $server;
    static $data_folder = '/usr/local/data/opta';

    public function download($url, $filename, $delete = false)
    {
        if(is_file(self::$data_folder .$filename) && $delete === false) {
            throw new \Exception('File already exists');
        }
        if(false === ($file = @file_get_contents($url))) {
            throw new \Exception('File could not be found');
        }
        if(false === file_put_contents(self::$data_folder .$filename,$file)) {
            throw new \Exception('Could not save file');
        }
        return true;
    }
    public function downloadForMatch($match_id, $delete = false, $flush = true)
    {
        if($this->downloadEvents($match_id,$delete) && $this->downloadMain($match_id,$delete)) {
            if($flush) {
                $this->get('utc_opta.data_controller')->flush();
            }
            return true;
        }
        return false;
    }
    public function downloadEvents($match_id, $delete = false)
    {
        if($this->download($this->getUrlEvents($match_id), '/events/' . $match_id . '.json', $delete)) {
            $this->get('utc_opta.data_controller')->file($match_id, 'events', function(&$doc, $doctrine, $repository) use($match_id) {
                if(!$doc) {
                    $class = ($repository->getClassName());
                    $doc = new $class;
                    $doc->setMatchId($match_id);
                    $doc->setFilename("events/{$match_id}.json");
                    $doc->setFileType("events");
                }
                $doc->setIsProcessed(false);
                $doc->setTimestamp(new DateTime());
            });
            return true;
        }
    }

    public function downloadMain($match_id, $delete = false)
    {
        if($this->download($this->getUrlMain($match_id), '/match/' . $match_id . '.json', $delete)) {
            $this->get('utc_opta.data_controller')->file($match_id, 'match', function(&$doc, $doctrine, $repository) use($match_id) {
                if(!$doc) {
                    $class = ($repository->getClassName());
                    $doc = new $class;
                    $doc->setMatchId($match_id);
                    $doc->setFilename("match/{$match_id}.json");
                    $doc->setFileType("match");
                }
                $doc->setIsProcessed(false);
                $doc->setTimestamp(new DateTime());
                return $doc;
            });
            return true;
        }
    }

    static public function getUrlMain($match_id)
    {
        return "http://omo.akamai.opta.net/?feed_type=f9&game_id={$match_id}&user=owv2&psw=wacRUs5U&jsoncallback";
    }
    static public function getUrlEvents($match_id)
    {
        return "http://omo.akamai.opta.net/?feed_type=f24&game_id={$match_id}&user=owv2&psw=wacRUs5U&jsoncallback";
    }
}
