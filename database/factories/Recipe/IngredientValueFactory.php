<?php

namespace Database\Factories\Recipe;

use App\Models\Recipe\IngredientValue;
use Illuminate\Database\Eloquent\Factories\Factory;

class IngredientValueFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = IngredientValue::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->unique()->randomElement(['grams', 'kgs', 'tbsp', 'tsp', 'small glass', 'large glass']),
            'description' => $this->faker->boolean ? $this->faker->text(10) : null
        ];
    }
}
