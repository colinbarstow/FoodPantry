<?php

namespace App\Observers\Recipe;

use App\Models\Recipe\Recipe;

class RecipeObserver
{
    /**
     * Handle the Recipe "created" event.
     *
     * @param Recipe $recipe
     * @return void
     */
    public function created(Recipe $recipe)
    {

    }

    /**
     * Handle the Recipe "updated" event.
     *
     * @param Recipe $recipe
     * @return void
     */
    public function updated(Recipe $recipe)
    {
        //
    }

    /**
     * Handle the Recipe "deleted" event.
     *
     * @param Recipe $recipe
     * @return void
     */
    public function deleted(Recipe $recipe)
    {
        //
    }

    /**
     * Handle the Recipe "restored" event.
     *
     * @param Recipe $recipe
     * @return void
     */
    public function restored(Recipe $recipe)
    {
        //
    }

    /**
     * Handle the Recipe "force deleted" event.
     *
     * @param Recipe $recipe
     * @return void
     */
    public function forceDeleted(Recipe $recipe)
    {
        //
    }
}
