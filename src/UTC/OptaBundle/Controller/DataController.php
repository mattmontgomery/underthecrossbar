<?php
/**
 * User: mmontgomery/deseretdigital
 * Date: 2014-09-05
 */

namespace UTC\OptaBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DataController extends Controller
{
    public function __construct($container = null)
    {
        $this->setContainer($container);
    }

    /**
     * @param $match_id
     * @param $file_type
     * @param callable $callback
     * @return mixed
     */
    public function file($match_id, $file_type, callable $callback)
    {
        $doctrine = $this->getDoctrine();
        $manager = $doctrine->getManagerForClass('UTCStatsBundle:FileStats');
        $repository = $manager->getRepository('UTC\StatsBundle\Entity\FileStats');
        $doc = $init = $repository->findOneBy(["match_id"=>$match_id, "file_type"=>$file_type]);
        $callback($doc, $this->getDoctrine(), $repository);
        if(!$init) {
            $manager->persist($doc);
        }
    }

    public function flush()
    {
        $this->getDoctrine()->getManager()->flush();
    }
} 