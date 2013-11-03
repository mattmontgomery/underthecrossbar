<?php
/**
 * User: mmontgomery
 * Date: 2013-11-01
 */

namespace UTC\StatsBundle\Command;

use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use UTC\StatsBundle\Controller\FileController;

class DownloadCommand extends Command
{
    protected function configure()
    {
        $this
            ->setName('stats:download')
            ->addOption('download-file','d',InputOption::VALUE_REQUIRED,'Download a specific file.')
            ->addOption('download-gaps','',InputOption::VALUE_NONE,'Download any gaps in files.')
            ->addOption('output-directory','',InputOption::VALUE_REQUIRED,'Output to a specific directory.')
            ->addOption('competition','c',InputOption::VALUE_REQUIRED,'Competition ID','98')
        ;
    }
    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $competition_id = $input->getOption('competition');
        $controller = new FileController();
        $verbosity = $output->getVerbosity();
        $downloaded = 0;
        if(null !== ($output_directory = $input->getOption('output-directory'))) {
            $controller->setDataFolder($output_directory);
        }
        $most_recent = $controller->getMostRecent();
        while(true) {
            $most_recent['match_number']++;
            $filename = $controller->compileFileName($most_recent);
            if($controller->download($filename)) {
                if($verbosity >= OutputInterface::VERBOSITY_VERBOSE) {
                    $output->writeln("<info>File {$filename} downloaded successfully</info>");
                }
            } else {
                if($verbosity >= OutputInterface::VERBOSITY_VERBOSE) {
                    $output->writeln("<comment>Reached end of files</comment>: <error>{$filename}</error>");
                }
                break;
            }
        }
        $output->writeln("<comment>File download completed:</comment> {$downloaded} file(s) downloaded");
    }
}