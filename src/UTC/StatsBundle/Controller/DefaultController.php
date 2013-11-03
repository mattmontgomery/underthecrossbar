<?php

namespace UTC\StatsBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction()
    {
        return $this->render('UTCStatsBundle:Default:index.html.twig');
    }
}
