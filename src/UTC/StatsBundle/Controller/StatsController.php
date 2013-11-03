<?php

namespace UTC\StatsBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class StatsController extends Controller
{
    static $players = array();
    static $prefixes = array(
        'match'=>'f',
        'competition'=>'c',
        'team'=>'t',
        'player'=>'p',
        'venue'=>'v',
        'official'=>'o',
    );
    public function loadPlayers()
    {
        $player_repository = $this->getDoctrine()->getRepository('UTCStatsBundle:OptaPlayer');
        $players = $player_repository->findAll();
        return array_map(function($player) { return array($player->getPlayerId()=>$player); },$players);
    }
}
