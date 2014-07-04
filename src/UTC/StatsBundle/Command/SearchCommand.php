<?php

namespace UTC\StatsBundle\Command;

use Symfony\Component\Console\Command\Command;
use Symfony\Bundle\FrameworkBundle\Command\ContainerAwareCommand;
use Symfony\Component\Console\Formatter\OutputFormatterStyle;
use Symfony\Component\Console\Helper\TableHelper;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use UTC\StatsBundle\Controller\FileProcessController;
use UTC\StatsBundle\Controller\SearchController;
use UTC\StatsBundle\Controller\StatsController;

class SearchCommand extends ContainerAwareCommand
{
    /**
     * @var SearchController
     */
    protected $controller;
    protected $output;
    protected function configure()
    {
        $this->setName('stats:search')
            ->setDescription('Retrieve stats for a specific player')
            ->addOption('stat-types','',InputOption::VALUE_OPTIONAL,'')
            ->addOption('player','',InputOption::VALUE_REQUIRED,'')
            ->addOption('team','',InputOption::VALUE_REQUIRED,'')
        ;
    }
    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $this->output = $output;
        $this->controller = new SearchController();
        $this->controller->setContainer($this->getContainer());
        $options = $input->getOptions();
        if($options['player'] !== null) {
            $this->searchPlayer($options['player']);
        }
        if($options['team'] !== null) {
            $this->searchTeam($options['team']);
        }
        if($options['stat-types'] !== null) {
            $this->searchStat(explode(',',$options['stat-types']));
        }
    }
    protected function searchPlayer($search_string)
    {
        $players = $this->controller->searchPlayers(array(
            'firstName'=>'%'.$search_string.'%',
            'knownName'=>'%'.$search_string.'%',
            'lastName'=>'%'.$search_string.'%',
        ));
        $table = new TableHelper();
        $table->setLayout(TableHelper::LAYOUT_DEFAULT);
        $table->setHeaders(array('Player ID','First Name','Last Name','Known As'));
        array_map(function($player) use($table) {
            $table->addRow(array($player['playerId'],$player['firstName'],$player['lastName'],$player['knownName']));
        },$players);
        $table->render($this->output);
    }
    protected function searchTeam($search_string)
    {
        $teams = $this->controller->searchTeams(array(
            'name'=>'%'.$search_string.'%',
        ));
        $table = new TableHelper();
        $table->setLayout(TableHelper::LAYOUT_DEFAULT);
        $table->setHeaders(array('Team ID','Team Name'));
        array_map(function($team) use($table) {
            $table->addRow(array($team['teamId'],$team['name']));
        },$teams);
        $table->render($this->output);
    }
    protected function searchStat($search)
    {
        $stats = $this->controller->searchStats($search);
        $table = new TableHelper();
        $table->setLayout(TableHelper::LAYOUT_DEFAULT);
        $table->setHeaders(array('Stat Type'));
        array_map(function($stat) use ($table) { $table->addRow(array($stat['statType'])); },$stats);
        $table->render($this->output);
    }
}