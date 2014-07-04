<?php

namespace UTC\StatsBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Doctrine\ORM\QueryBuilder;

class SearchController extends Controller
{
    /**
     * @var QueryBuilder
     */
    protected $query;
    static $players = array();
    static $prefixes = array(
        'match'=>'f',
        'competition'=>'c',
        'team'=>'t',
        'player'=>'p',
        'venue'=>'v',
        'official'=>'o',
    );

    /**
     * @param array $search
     * @return array
     */
    public function searchPlayers(array $search = array())
    {
        $dm = $this->getDoctrine()->getManager();
        $this->query = $dm->createQueryBuilder();
        $this->query->select(array('p'))
            ->from('UTCStatsBundle:OptaPlayer','p');
        $or = $this->query->expr()->orX();
        foreach($search as $key=>$val) {
            $or->add($this->query->expr()->like('p.'.$key,":search_{$key}"));
            $this->query->setParameter(":search_{$key}",$val);
        }
        $this->query->where($this->query->expr()->orX($or));
        $this->query->orderBy('p.lastName','ASC');
        return $this->query->getQuery()->getArrayResult();
    }
    public function searchStats(array $search = array())
    {
        $dm = $this->getDoctrine()->getManager();
        $this->query = $dm->createQueryBuilder();
        $this->query->select(array('distinct s.statType'))
            ->from('UTCStatsBundle:OptaMatchPlayerStat','s');
        $or = $this->query->expr()->orX();
        foreach($search as $key=>$val) {
            $or->add($this->query->expr()->like('s.statType',":search_{$key}"));
            $this->query->setParameter(":search_{$key}",'%'.$val.'%');
        }
        $this->query->where($this->query->expr()->orX($or));
        $this->query->orderBy('s.statType','ASC');
        return $this->query->getQuery()->getArrayResult();
    }
    public function searchTeams(array $search = array())
    {
        $dm = $this->getDoctrine()->getManager();
        $this->query = $dm->createQueryBuilder();
        $this->query->select(array('t'))
            ->from('UTCStatsBundle:OptaTeam','t');
        $or = $this->query->expr()->orX();
        foreach($search as $key=>$val) {
            $or->add($this->query->expr()->like('t.'.$key,":search_{$key}"));
            $this->query->setParameter(":search_{$key}",$val);
        }
        $this->query->where($this->query->expr()->orX($or));
        $this->query->orderBy('t.name','ASC');
        return $this->query->getQuery()->getArrayResult();
    }
}
