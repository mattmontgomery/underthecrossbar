<?php

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
            ->addOption('download-from','f',InputOption::VALUE_REQUIRED,'Download any gaps in files.')
            ->addOption('output-directory','o',InputOption::VALUE_REQUIRED,'Output to a specific directory.','/usr/local/data/opta/')
            ->addOption('competition','c',InputOption::VALUE_REQUIRED,'Competition ID','98')
            ->addOption('limit','l',InputOption::VALUE_REQUIRED,'Competition ID',100)
            ->addOption('skip','',InputOption::VALUE_NONE,'Competition ID')
            ->addOption('year','y',InputOption::VALUE_REQUIRED,'Competition year',date('Y'))
        ;
    }
    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $competition_id = $input->getOption('competition');
        $year = $input->getOption('year');
        $download_file = $input->getOption('download-file');
        $download_from = $input->getOption('download-from');
        $skip = $input->getOption('skip');
        $limit = $input->getOption('limit');
        $controller = new FileController();
        $verbosity = $output->getVerbosity();
        $downloaded = 0;
        if($verbosity >= OutputInterface::VERBOSITY_VERBOSE && $download_from) {
            $output->writeln('Downloading files from <info>' . $download_from . '</info>');
        }
        if(null !== ($output_directory = $input->getOption('output-directory'))) {
            $controller->setDataFolder($output_directory);
        }
        if($download_file) {
            $filename = explode('/',$download_file);
            $fname = array_pop($filename);

            if($controller->download($fname,join('/',$filename).'/')) {
                $downloaded++;
                if($verbosity >= OutputInterface::VERBOSITY_VERBOSE) {
                    $output->writeln("<info>File {$fname} downloaded successfully</info>");
                }
            }
        } else {

        }
        if($download_from) {
            $most_recent = array(
                'match_number'=>$download_from,
                'prefix'=>'srml',
                'competition_id'=>$competition_id,
                'season'=>$year,
                'file'=>'matchresults.xml'
            );
            if($verbosity > OutputInterface::VERBOSITY_VERBOSE) {
                $output->writeln(print_r($most_recent));
            }
        } else {
            $most_recent = $controller->getMostRecent();
        }
        $i = 0;
        while(++$i) {
            $most_recent['match_number']++;
            $filename = $controller->compileFileName($most_recent);
            if($verbosity > OutputInterface::VERBOSITY_VERBOSE) {
                $output->writeln("<comment>Attempting to download {$filename}</comment>");
            }
            if($controller->download($filename)) {
                $downloaded++;
                if($verbosity >= OutputInterface::VERBOSITY_VERBOSE) {
                    $output->writeln("<info>File {$filename} downloaded successfully</info>");
                }
            } else {
                if($verbosity >= OutputInterface::VERBOSITY_VERBOSE && $skip == false) {
                    $output->writeln("<comment>Reached end of files</comment>: <error>{$filename}</error>");
                }
                if($skip == false || $i == $limit) {
                    break;
                } else {
                    if($verbosity >= OutputInterface::VERBOSITY_VERBOSE) {
                        $output->writeln("<error>File {$filename} could not be downloaded</error>");
                    }
                }
            }
        }
        $output->writeln("<comment>File download completed:</comment> {$downloaded} file(s) downloaded");
    }
}