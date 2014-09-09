<?php
/**
 * User: mmontgomery/deseretdigital
 * Date: 2014-09-06
 */

namespace UTC\OptaBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use UTC\OptaBundle\Document\Query;

class QueryController extends Controller
{
    static $action_map = [
        'player' => 'playerMatchStatsAction'
    ];
    public function setup($action)
    {
        $action = self::$action_map[$action] ?: null;
        if(!$action) {
            return false;
        }
        return $this->$action('setup');
    }
    public function execute($action, $query)
    {
        $action = self::$action_map[$action] ?: null;
        if(!$action) {
            return false;
        }
        return $this->$action('execute', $query);
    }


    public function playerMatchStatsAction($mode, &$query = null)
    {
        if($query === null) {
            $query = new Query();
        }
        if($mode === 'setup') {
            $this->playerMatchStats_setup($query);
        } else if($mode === 'execute') {
            $this->playerMatchStats_execute($query);
        }
        return $query;
    }
    public function playerMatchStats_setup(&$query)
    {
        $query->options = [
            'stat_type'=>'array',
            'season_id'=>'string'
        ];
        $query->defaults = [
            'season_id'=>'2014'
        ];
    }
    public function playerMatchStats_execute(&$query)
    {
        $query->results = [];
        $em = $this->getDoctrine()->getManager();
        $total = [];
        if(!in_array('mins_played',$query->params['stat_type'])) {
            $query->params['stat_type'][] = 'mins_played';
        }
        $results = [];
        foreach($query->params['stat_type'] as $param) {
            $q = $em->createQuery('
              SELECT p.playerId, sum(p.statValue) as statValue
              FROM UTCStatsBundle:OptaMatchPlayerStat p
              INNER JOIN UTCStatsBundle:OptaMatch m
              WHERE m.seasonId = :season_id AND p.statType = :stat_type AND m.matchId = p.matchId
              GROUP BY p.playerId
              '
            );
            $q->setParameter('stat_type', $param);
            $q->setParameter('season_id', $query->params['season_id']);
            $data = $q->getResult();
            array_walk($data, function($val) use(&$results, $param) {
                if(empty($results[$val['playerId']])) {
                    $results[$val['playerId']] = [];
                }
                $results[$val['playerId']][$param] = $val['statValue'];
            });
        }
        if($param = 'player_name') {
            $q = $em->createQuery('
              SELECT p.playerId, p.knownName, p.firstName, p.lastName
              FROM UTCStatsBundle:OptaPlayer p
              '
            );
            $data = $q->getResult();
            array_walk($data, function($val) use(&$results, $param) {
                if(!empty($results[$val['playerId']])) {
                    $results[$val['playerId']]['name'] = ($val['knownName'] ?: $val['firstName']. ' ' .$val['lastName']);
                }
            });
        }
        $query->results = $results;
    }

    public function flattenResults($results)
    {
        $keys = array_keys(current($results));
        $index = [];
        foreach($keys as $idx=>$val) {
            $index[$val] = $idx;
        }
        array_walk($results, function(&$result) {
            $new = [];
            array_walk($result, function($data) use (&$new) {
                $new[] = $data;
            });
            $result = $new;
        });
        return ['keys'=>$keys,'data'=>$results];
//        array_reduce($results, function($record) { var_dump($record,); }, $results);
    }
} 