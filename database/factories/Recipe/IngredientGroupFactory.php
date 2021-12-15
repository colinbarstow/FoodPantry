<?php

namespace Database\Factories\Recipe;

use App\Models\Recipe\IngredientGroup;
use FakerRestaurant\Provider\en_US\Restaurant;
use Illuminate\Database\Eloquent\Factories\Factory;

class IngredientGroupFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = IngredientGroup::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $this->faker->addProvider(new Restaurant($this->faker));

        return [
            'name' => $this->faker->foodName()
        ];
    }
}
