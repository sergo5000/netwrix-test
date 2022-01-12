<?php

namespace App\Entity;

use App\Repository\PartnerLocatorRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=PartnerLocatorRepository::class)
 */
class PartnerLocator
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $company;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $status;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $logo;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $address;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $website;

    /**
     * @ORM\Column(type="string", length=40)
     */
    private $phone;

    /**
     * @ORM\Column(type="string", length=1000, name="countries_covered")
     */
    private $countriesCovered;

    /**
     * @ORM\Column(type="string", length=1000, name="states_covered")
     */
    private $statesCovered;

    public static function getAllStatuses(): array
    {
        return ['MSP Partner', 'Preferred Partner', 'Premium Partner', 'Elite Partner', 'Distributor'];
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCompany(): ?string
    {
        return $this->company;
    }

    public function setCompany(string $company): self
    {
        $this->company = $company;

        return $this;
    }

    public function getStatus(): ?string
    {
        return $this->status;
    }

    public function setStatus(string $status): self
    {
        $this->status = $status;

        return $this;
    }
 
    public function getLogo(): ?string
    {
        return $this->logo;
    }

    public function setLogo(string $logo): self
    {
        $this->logo = $logo;

        return $this;
    }

    public function getAddress(): ?string
    {
        return $this->address;
    }

    public function setAddress(string $address): self
    {
        $this->address = $address;

        return $this;
    }

    public function getWebsite(): ?string
    {
        return $this->website;
    }

    public function setWebsite(string $website): self
    {
        $this->website = $website;

        return $this;
    }

    public function getPhone(): ?string
    {
        return $this->phone;
    }

    public function setPhone(string $phone): self
    {
        $this->phone = $phone;

        return $this;
    }

    public function getCountriesCovered(): ?string
    {
        return $this->countriesCovered;
    }

    public function setCountriesCovered(string $countriesCovered): self
    {
        $this->countriesCovered = $countriesCovered;

        return $this;
    }

    public function getStatesCovered(): ?string
    {
        return $this->statesCovered;
    }

    public function setStatesCovered(string $statesCovered): self
    {
        $this->statesCovered = $statesCovered;

        return $this;
    }
}
