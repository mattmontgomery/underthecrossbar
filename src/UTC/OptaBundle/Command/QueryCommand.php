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
use UTC\OptaBundle\Controller\QueryController;

class QueryCommand extends ContainerAwareCommand
{
    public $options;
    public function configure()
    {
        $this
            ->setName('query')
            ->addArgument('query_name',InputArgument::REQUIRED,'Query name')
        ;
    }
    public function execute(InputInterface $input, OutputInterface $output)
    {
        $query_controller = new QueryController();
        $query_controller ->setContainer($this->getContainer());
        $query_name = $input->getArgument('query_name');
        if(!array_key_exists($query_name, QueryController::$action_map)) {
            throw new \Exception('Invalid query specified');
        }

        if($query = $query_controller->setup($query_name)) {
            $params = $this->askOptions($query, $input, $output);
            $query->params = $params;
        }
        $output->writeln('<info>Running query</info>');
        $time = microtime(true);
        $query_controller->execute($query_name, $query);
        $output->writeln('<info>Query completed; took ' . ((microtime(true) - $time)).'s</info>');
        $output->writeln("<info>".count($query->results)." results found</info>");
        $flattened = $query_controller->flattenResults($query->results);
        var_export($flattened);
    }
    public function askOptions($query, InputInterface $input, OutputInterface $output)
    {
        $dialog = $this->getHelper('dialog');
        $params = [];
        $options = $query->options;
        foreach($options as $key=>$option) {
            if($option === 'array') {
                $params[$key] = [];
                $output->writeln("<info>Key: {$key} (enter to continue)</info>");
                while(true) {
                    $value = $dialog->ask($output, "<question>{$key}: </question>");
                    if(!$value) { break; }
                    $params[$key][] = $value;
                }
            }
            if($option === 'string') {
                $default = (!empty($query->defaults[$key]) ? $query->defaults[$key] : null);
                $params[$key] = $dialog->ask($output, "<question>{$key}: <info>{$default}</info> </question>", $default);
            }
        }
        return $params;
    }
}