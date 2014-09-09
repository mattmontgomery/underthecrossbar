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

class FileDownloadCommand extends ContainerAwareCommand
{
    public function configure()
    {
        $this
            ->setName('file:download')
            ->addArgument('match',InputArgument::REQUIRED,'Match ID')
            ->addOption('force','f',InputOption::VALUE_NONE,'Force download')
        ;
    }
    public function execute(InputInterface $input, OutputInterface $output)
    {
        $file_controller = new FileController();
        $file_controller->setContainer($this->getContainer());

        $match_id = $input->getArgument('match');
        $force = $input->getOption('force');

        if($file_controller->downloadForMatch($match_id, $force)) {
            $output->writeln("<info>Downloaded main and event data for match: <comment>{$match_id}</comment></info>", OutputInterface::OUTPUT_NORMAL);
        }
    }
} 