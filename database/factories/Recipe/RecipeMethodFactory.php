<?php

namespace Database\Factories\Recipe;

use App\Models\Recipe\RecipeMethod;
use Illuminate\Database\Eloquent\Factories\Factory;

class RecipeMethodFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = RecipeMethod::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'step_description' => $this->faker->text(rand(50,250))
        ];
    }
}
