<?php

namespace App\Repository\Eloquent;

use App\Models\Recipe\IngredientDetail;
use App\Repository\UserRepositoryInterface;

class IngredientDetailRepository extends BaseRepository implements UserRepositoryInterface
{
    protected $model;

    /**
     * BaseRepository Constructor
     *
     * @param IngredientDetail $model
     */
    public function __construct(IngredientDetail $model)
    {
        $this->model = $model;
    }
}
