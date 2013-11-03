<?php

namespace UTC\ScarfBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction($name)
    {
        return $this->render('UTCScarfBundle:Default:index.html.twig', array('name' => $name));
    }
}
