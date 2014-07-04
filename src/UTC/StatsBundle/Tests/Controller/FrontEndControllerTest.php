<?php

namespace UTC\StatsBundle\Tests\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class FrontEndControllerTest extends WebTestCase
{
    public function testPlayers()
    {
        $client = static::createClient();

        $crawler = $client->request('GET', '/players');
    }

}
