<?php

namespace App\Observers\Recipe;

use App\Models\Recipe\RecipeDetail;

class RecipeDetailObserver
{

    private function updateNutritionalValueOfRecipe($recipeDetail)
    {

        $kcal = 0;
        $fat = 0;
        $saturates = 0;
        $carbs = 0;
        $sugars = 0;
        $fibre = 0;
        $protein = 0;
        $salt = 0;

        foreach($recipeDetail->recipe->ingredients as $ingredient){
            $kcal      += ($ingredient->pivot->amount * $ingredient->ingredientDetails->kcal_per_value);
            $fat       += ($ingredient->pivot->amount * $ingredient->ingredientDetails->fat_per_value);
            $saturates += ($ingredient->pivot->amount * $ingredient->ingredientDetails->saturates_per_value);
            $carbs     += ($ingredient->pivot->amount * $ingredient->ingredientDetails->carbs_per_value);
            $sugars    += ($ingredient->pivot->amount * $ingredient->ingredientDetails->sugars_per_value);
            $fibre     += ($ingredient->pivot->amount * $ingredient->ingredientDetails->fibre_per_value);
            $protein   += ($ingredient->pivot->amount * $ingredient->ingredientDetails->protein_per_value);
            $salt      += ($ingredient->pivot->amount * $ingredient->ingredientDetails->salt_per_value);
        }

        $recipeDetail->kcal = $kcal;
        $recipeDetail->fat = $fat;
        $recipeDetail->saturates = $saturates;
        $recipeDetail->carbs = $carbs;
        $recipeDetail->sugars = $sugars;
        $recipeDetail->fibre = $fibre;
        $recipeDetail->protein = $protein;
        $recipeDetail->salt = $salt;
        $recipeDetail->save();
    }

    /**
     * Handle the RecipeDetail "created" event.
     *
     * @param RecipeDetail $recipeDetail
     * @return void
     */
    public function created(RecipeDetail $recipeDetail)
    {
        $this->updateNutritionalValueOfRecipe($recipeDetail);
    }

    /**
     * Handle the RecipeDetail "updated" event.
     *
     * @param RecipeDetail $recipeDetail
     * @return void
     */
    public function updated(RecipeDetail $recipeDetail)
    {
//        $this->updateNutritionalValueOfRecipe($recipeDetail);
    }

    /**
     * Handle the RecipeDetail "deleted" event.
     *
     * @param RecipeDetail $recipeDetail
     * @return void
     */
    public function deleted(RecipeDetail $recipeDetail)
    {
        //
    }

    /**
     * Handle the RecipeDetail "restored" event.
     *
     * @param RecipeDetail $recipeDetail
     * @return void
     */
    public function restored(RecipeDetail $recipeDetail)
    {
        //
    }

    /**
     * Handle the RecipeDetail "force deleted" event.
     *
     * @param RecipeDetail $recipeDetail
     * @return void
     */
    public function forceDeleted(RecipeDetail $recipeDetail)
    {
        //
    }
}
