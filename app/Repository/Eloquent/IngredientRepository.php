<?php

namespace App\Repository\Eloquent;

use App\Http\Requests\StoreIngredientRequest;
use App\Models\Recipe\Ingredient;
use App\Repository\IngredientInterface;

class IngredientRepository extends BaseRepository implements IngredientInterface
{
    protected $model;

    /**
     * BaseRepository Constructor
     *
     * @param Ingredient $model
     */
    public function __construct(Ingredient $model)
    {
        $this->model = $model;
    }
}
