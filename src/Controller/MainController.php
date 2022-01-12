<?php

namespace App\Controller;

use App\Entity\PartnerLocator;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;

class MainController extends AbstractController
{
    public function index(ManagerRegistry $doctrine): Response
    {
        $allStatuses = PartnerLocator::getAllStatuses();
        $allStatuses = json_encode($allStatuses, JSON_UNESCAPED_UNICODE);

        $partnerLocators = $doctrine->getRepository(PartnerLocator::class)->createQueryBuilder('pl')->getQuery()->getArrayResult();
        $partnerLocators = json_encode($partnerLocators, JSON_UNESCAPED_UNICODE);

        $type = 'Type';

        return $this->render('main.html.twig', ['allStatuses' => $allStatuses, 'partnerLocators' => $partnerLocators, 'type' => $type]);
    }

    public function findCards(Request $request, ManagerRegistry $doctrine): Response
    {
        $type = $request->request->get('type');
        $partnerLocators = $doctrine->getRepository(PartnerLocator::class)->createQueryBuilder('pl')
                            ->where('pl.status = :type')->setParameter('type', $type)->getQuery()->getArrayResult();

        return $this->json($partnerLocators);
    }
}