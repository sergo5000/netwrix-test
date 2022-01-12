<?php

namespace App\Repository;

use App\Entity\PartnerLocator;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method PartnerLocator|null find($id, $lockMode = null, $lockVersion = null)
 * @method PartnerLocator|null findOneBy(array $criteria, array $orderBy = null)
 * @method PartnerLocator[]    findAll()
 * @method PartnerLocator[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PartnerLocatorRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PartnerLocator::class);
    }

    // /**
    //  * @return PartnerLocator[] Returns an array of PartnerLocator objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('p.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?PartnerLocator
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
