<?php

namespace App\Repository\Eloquent;

use App\Models\User;
use App\Repository\UserRepositoryInterface;

class UserRepository extends BaseRepository implements UserRepositoryInterface
{
    protected $model;

    /**
     * BaseRepository Constructor
     *
     * @param User $model
     */
    public function __construct(User $model)
    {
        $this->model = $model;
    }
}
