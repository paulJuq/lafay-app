<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\WorkoutSessionRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ApiResource(
 *      normalizationContext={"groups" = {"workout_session:read"}},
 *      denormalizationContext={"groups" = {"workout_session:write"}},
 *)
 * @ORM\Entity(repositoryClass=WorkoutSessionRepository::class)
 */
class WorkoutSession
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"workout_session:read", "workout_session:write", "user:read"})
     */
    private $level;

    /**
     * @ORM\Column(type="integer")
     * @Groups({"workout_session:read", "workout_session:write"})
     */
    private $duration;

    /**
     * @ORM\Column(type="json")
     * @Groups({"workout_session:read", "workout_session:write", "user:read"})
     */
    private $workout = [];

    /**
     * @ORM\Column(type="datetime")
     * @Groups({"workout_session:read", "workout_session:write", "user:read"})
     */
    private $createdAt;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="workoutSessions")
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"workout_session:read", "workout_session:write"})
     */
    private $user;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLevel(): ?string
    {
        return $this->level;
    }

    public function setLevel(string $level): self
    {
        $this->level = $level;

        return $this;
    }

    public function getDuration(): ?int
    {
        return $this->duration;
    }

    public function setDuration(int $duration): self
    {
        $this->duration = $duration;

        return $this;
    }

    public function getWorkout(): ?array
    {
        return $this->workout;
    }

    public function setWorkout(array $workout): self
    {
        $this->workout = $workout;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }
}
