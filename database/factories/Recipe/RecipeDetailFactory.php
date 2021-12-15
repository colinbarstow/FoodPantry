<?php

namespace Database\Factories\Recipe;

use App\Models\Recipe\RecipeDetail;
use Illuminate\Database\Eloquent\Factories\Factory;

class RecipeDetailFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = RecipeDetail::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'preparation_time' => rand(10,90),
            'cooking_time' => rand(20,90)
        ];
    }
}
