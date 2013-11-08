<?php

namespace UTC\StatsBundle\Command;

use Symfony\Component\Console\Command\Command;
use Symfony\Bundle\FrameworkBundle\Command\ContainerAwareCommand;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use UTC\StatsBundle\Controller\FileController;
use UTC\StatsBundle\Controller\FileProcessController;

class ProcessCommand extends ContainerAwareCommand
{
    protected function configure()
    {
        $this
            ->setName('stats:process')
            ->addOption('process-files','p',InputOption::VALUE_REQUIRED,'Processed unprocessed files.')
            ->addOption('check-directory','c',InputOption::VALUE_NONE,'Processed unprocessed files.')
        ;
    }
    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $controller = new FileController();
        $processor = new FileProcessController();
        $controller->setContainer($this->getContainer());
        $processor->setContainer($this->getContainer());
        $verbosity = $output->getVerbosity();
        $processed = 0;
        $unprocessed = $controller->getUnprocessed($input->getOption('check-directory'));
        $processor->processBatch($unprocessed);
    }
}