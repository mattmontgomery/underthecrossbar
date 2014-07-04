<?php

namespace UTC\StatsBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use UTC\StatsBundle\Controller\StatsController;

class FrontEndController extends Controller
{
	private $_stats;
	public function __construct()
	{
		$this->_stats = new StatsController();
	}
    public function playersAction()
    {
        $this->setup();
        $search = array();
        $term = '';
        if(array_key_exists('q',$_GET)) {
            $term = $_GET['q'];
            $search['lastName'] = '%'.$_GET['q'].'%';
            $search['firstName'] = '%'.$_GET['q'].'%';
        }
        $players = $this->_stats->loadPlayers($search,true);
        return $this->render('UTCStatsBundle:FrontEnd:players.html.twig',['players'=>$players,'term'=>$term]);
    }
    public function teamsAction()
    {
        $this->setup();
        $search = array();
        $term = '';
        if(array_key_exists('q',$_GET)) {
            $term = $_GET['q'];
            $search['name'] = '%'.$_GET['q'].'%';
        }
        $teams = $this->_stats->loadTeams($search,true);
        return $this->render('UTCStatsBundle:FrontEnd:teams.html.twig',['teams'=>$teams,'term'=>$term]);
    }
    public function playersStatsAction($player)
    {
        $this->setup();

    }
    public function setup()
    {
        $this->_stats->setContainer($this->container);
    }

}
