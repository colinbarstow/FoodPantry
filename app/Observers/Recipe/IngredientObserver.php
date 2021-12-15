<?php

namespace App\Observers\Recipe;

use App\Models\Recipe\Ingredient;

class IngredientObserver
{

    /**
     * Handle the Ingredient "created" event.
     *
     * @param  Ingredient  $ingredient
     * @return void
     */
    public function created(Ingredient $ingredient)
    {

    }

    /**
     * Handle the Ingredient "updated" event.
     *
     * @param  Ingredient  $ingredient
     * @return void
     */
    public function updated(Ingredient $ingredient)
    {
        //
    }

    /**
     * Handle the Ingredient "deleted" event.
     *
     * @param  Ingredient  $ingredient
     * @return void
     */
    public function deleted(Ingredient $ingredient)
    {
        //
    }

    /**
     * Handle the Ingredient "restored" event.
     *
     * @param  Ingredient  $ingredient
     * @return void
     */
    public function restored(Ingredient $ingredient)
    {
        //
    }

    /**
     * Handle the Ingredient "force deleted" event.
     *
     * @param  Ingredient  $ingredient
     * @return void
     */
    public function forceDeleted(Ingredient $ingredient)
    {
        //
    }
}
