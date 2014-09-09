<?php
/**
 * User: mmontgomery/deseretdigital
 * Date: 2014-09-05
 */

namespace UTC\OptaBundle\Command;

use Symfony\Bundle\FrameworkBundle\Command\ContainerAwareCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use UTC\OptaBundle\Controller\FileController;

class FileDownloadBatchCommand extends ContainerAwareCommand
{
    public function configure()
    {
        $this
            ->setName('file:download:batch')
            ->addArgument('match_from',InputArgument::REQUIRED,'Match ID from')
            ->addArgument('match_to',InputArgument::REQUIRED,'Match ID to')
            ->addOption('force','f',InputOption::VALUE_NONE,'Force download')
        ;
    }
    public function execute(InputInterface $input, OutputInterface $output)
    {
        $file_controller = new FileController();
        $file_controller->setContainer($this->getContainer());

        $match_from = $input->getArgument('match_from');
        $match_to = $input->getArgument('match_to');
        $force = $input->getOption('force');
        $size = $match_to - $match_from;
        $interval = 5;
        if(($size) < 0) {
            $output->writeln("<error>Invalid range specified</error>");
        }
        $i = 0;
        for($match_id = $match_from; $match_id <= $match_to; $match_id++) {
            $i++;
            if($file_controller->downloadForMatch($match_id, $force,$i % $interval)) {
                $output->writeln("<info>Downloaded main and event data for match: <comment>{$match_id}</comment></info>", OutputInterface::OUTPUT_NORMAL);
            }
            if($i % $interval === 0) {
                $output->writeln("<info>Update database with {$interval} files</info>");
                $output->writeln('<comment>Sleeping for 10 seconds...</comment>');
                sleep(10);
            }
        }
    }
} 