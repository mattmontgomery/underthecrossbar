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
use UTC\StatsBundle\Controller\FileController;
use UTC\StatsBundle\Controller\FileProcessController;
use UTC\StatsBundle\Controller\StatsController;



class PlayerStatsCommand extends ContainerAwareCommand
{
    /**
     * @var StatsController
     */
    protected $controller;
    protected $output;
    protected function configure()
    {
        $this->setName('stats:player')
            ->setDescription('Retrieve stats for a specific player')
            ->addArgument('player',InputArgument::REQUIRED,'field: playerId')
            ->addOption('stat-type','t',InputOption::VALUE_REQUIRED,'Comma separated list of stat types to retrieve','mins_played')
            ->addOption('competition','',InputOption::VALUE_REQUIRED,'98')
            ->addOption('season','',InputOption::VALUE_REQUIRED,date('Y'))
        ;
    }
    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $this->output = $output;
        $this->controller = new StatsController();
        $this->controller->setContainer($this->getContainer());

        $options = $input->getOptions();
        $arguments = $input->getArguments();
        $stat_types = array_unique(array_merge(explode(',',$options['stat-type'])));

        $table = new TableHelper();
        $table->setLayout(TableHelper::LAYOUT_BORDERLESS);
        $table->setHeaders(array_merge(array('Match date','Match ID','Won?'),$stat_types));

        $result = $this->controller->getPlayerStats($arguments['player'],$stat_types);
        $matchId = null;
        $table_stats = array();
        $table_matchdates = array();
        $team_won = array();
        foreach($result as $stat) {
            if(!array_key_exists($stat['matchId'],$table_matchdates)) {
                $table_matchdates[$stat['matchId']] = $stat['matchDate']->format('Y-m-d');
            }
            if(!array_key_exists($stat['matchId'],$team_won)) {
                $team_won[$stat['matchId']] = ($stat['teamId'] == $stat['resultWinner'] ? 'W' : ($stat['resultWinner'] == 0 ? 'D' : 'L'));
            }
            $table_stats[$stat['matchId']][$stat['statType']] = $stat['statValue'];
        }
        foreach($table_stats as $match_id=>$stat) {
            $row = array($match_id,$table_matchdates[$match_id],$team_won[$match_id]);
            array_map(function($type) use (&$row,&$stat){ $row[] = isset($stat[$type]) ? $stat[$type] : 0; },$stat_types);
            $table->addRow($row);
        }
        $output->writeln('Player stats table for player: '.$arguments['player']);
        $table->render($output);
    }
}