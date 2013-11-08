<?php
/**
 * User: mmontgomery/deseretdigital
 * Date: 2013-11-08
 */

namespace UTC\StatsBundle\Command;


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

class StatsLineupCommand extends ContainerAwareCommand
{

    protected function configure()
    {
        $this->setName('stats:lineup')
            ->addOption('mode','m',InputOption::VALUE_REQUIRED,'','unique')
            ->addOption('competition','c',InputOption::VALUE_REQUIRED,'','98')
            ->addOption('season','',InputOption::VALUE_REQUIRED,'','2013')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $output->getFormatter()->setStyle('level1',new OutputFormatterStyle('white','magenta'));
        $output->getFormatter()->setStyle('level2',new OutputFormatterStyle('white','red'));
        $view = $input->getOption('mode');
        switch($view) {
            case 'unique':
                $this->modeUnique($input,$output);
                break;
        }
    }

    protected function modeUnique(InputInterface $input, OutputInterface $output)
    {
        $table = new TableHelper();
        $table->setLayout(TableHelper::LAYOUT_DEFAULT);
        $table->setHeaders(array('Team','Matches','Avg'));

        $competition = $input->getOption('competition');
        $season = $input->getOption('season');
        $controller = new StatsController();
        $controller->setContainer($this->getContainer());
        $doctrine = $controller->getDoctrine();
        $em = $doctrine->getManager();
        $r = $em->getRepository('UTCStatsBundle:OptaMatch');
        $team_names = $this->getTeams();


        $team_matches = array();
        $matches = $r->findBy(
            array('competitionId'=>$competition,'seasonId'=>$season),
            array('matchDate'=>'asc')
        );
        foreach($matches as $match) {
            $lr = $em->getRepository('UTCStatsBundle:OptaMatchLineup');
            $lineup = $lr->findBy(
                array('matchId'=>$match->getMatchId(),'status'=>'Start')
            );

            $teams = array();
            foreach($lineup as $player) {
                $teams[$team_names[$player->getTeamId()]->getName()][] = $player->getPlayerId();
            }
            foreach($teams as $team_id=>$team) {
                asort($team);
                $team_matches[$team_id][$match->getMatchId()] = $team;
            }
        }
        ksort($team_matches);
        foreach($team_matches as $team_name=>$team) {
            $last_match = null;
            $team_diffs = array();
            $output_string = '';
            foreach($team as $match_id=>$match) {
                if($last_match === null) {
                    $output_string .= '.';
                    $last_match = $match;
                    continue;
                }
                $diffs = 11 - count(array_intersect($last_match,$match));
                $team_diffs[] = $diffs;
                $output_string .= ($diffs === 0 ? '.' : ($diffs === 11 ? 'a' : ($diffs === 10 ? 'x' : $diffs)));
                $last_match = $match;
            }
            $table->addRow(array($team_name,$output_string,round(array_sum($team_diffs) / count($team_diffs),2)));
        }
        $table->render($output);

    }
    public function getTeams()
    {
        $controller = new StatsController();
        $controller->setContainer($this->getContainer());
        $teams = $controller->getDoctrine()->getManager()->getRepository('UTCStatsBundle:OptaTeam')->findAll();
        $t = array();
        foreach($teams as $team) {
            $t[$team->getTeamId()] = $team;
        }
        return $t;
    }
}