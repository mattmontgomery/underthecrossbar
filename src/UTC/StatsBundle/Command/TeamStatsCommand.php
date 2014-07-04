<?php
/**
 * User: mmontgomery/deseretdigital
 * Date: 2013-11-13
 */

namespace UTC\StatsBundle\Command;


use Symfony\Bundle\FrameworkBundle\Command\ContainerAwareCommand;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use UTC\StatsBundle\Controller\StatsController;
use Symfony\Component\Console\Helper\TableHelper;

class TeamStatsCommand extends ContainerAwareCommand
{
    /**
     * @var StatsController
     */
    protected $controller;
    static $teams;
    public function configure()
    {
        $this
            ->setName('stats:team')
            ->setDescription('Compile team statistics')
            ->addArgument('team',InputArgument::REQUIRED,'Team ID')
            ->addOption('competition','c',InputOption::VALUE_REQUIRED,'Competition ID | 98: MLS','98') // default Major League Soccer
            ->addOption('season','',InputOption::VALUE_REQUIRED,'Season ID',date('Y'))
            ->addOption('stats','',InputOption::VALUE_REQUIRED,'Season ID','touches')
        ;
    }
    public function execute(InputInterface $input, OutputInterface $output)
    {
        $args = $input->getArguments();
        $options = $input->getOptions();

        $stats = explode(',',$options['stats']);

        $this->controller = new StatsController();
        $this->controller->setContainer($this->getContainer());
        self::$teams = $this->controller->loadTeams();

        $matches = $this->controller->getTeamStats($args['team'],array('touches'),$options);

        $headers = ['Match', 'Home', '','Away'];
        foreach($stats as $s) {
            array_push($headers,$s);
        }
        $table = new TableHelper();
        $table->setLayout(TableHelper::LAYOUT_DEFAULT);
        $table->setHeaders($headers);

        $output->writeln('<info>' . count($matches) .' matches found</info>');
        foreach($matches as $match) {
            $a = [
                'season'=>$match->getSeasonId(),
                'home'=>self::formatWinner($match->getHomeTeamId(),$match->getResultWinner()),
                'homeScore'=>$match->getHomeTeamScore() . '-' . $match->getAwayTeamScore(),
                'away'=>self::formatWinner($match->getAwayTeamId(),$match->getResultWinner()),
            ];
            foreach($stats as $s) {
                if(array_key_exists($s,$match->stats)) {
                    array_push($a,$match->stats[$s]->getStatValue());
                } else {
                    array_push($a,'');
                }
            }
            $table->addRow($a);
        }
        $table->render($output);
    }
    static function formatWinner($teamId,$winner,$showId = true) {
        $name = self::$teams[$teamId]->getName();
        $str = $name;
        if($teamId == $winner) {
            $str =  "<info>{$name}</info>";
        }
        if($showId) {
            $str .= " ({$teamId})";
        }
        return $str;
    }
}