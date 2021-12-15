<?php

namespace Database\Factories\Recipe;

use App\Models\Recipe\RecipeBook;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

class RecipeBookFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = RecipeBook::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name'       => $this->faker->text(5),
            'week_start' => $this->faker->boolean ? $this->faker->date() : null
        ];
    }
}
