<?php

namespace Database\Factories\Recipe;

use App\Models\Recipe\IngredientDetail;
use App\Models\Recipe\IngredientValue;
use Exception;
use Illuminate\Database\Eloquent\Factories\Factory;

class IngredientDetailFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = IngredientDetail::class;

    /**
     * Define the model's default state.
     *
     * @return array
     * @throws Exception
     */
    public function definition()
    {
        return [
            'value_count'         => 1,
            'kcal_per_value'      => random_int(1,1500),
            'fat_per_value'       => random_int(1,20),
            'saturates_per_value' => random_int(1,10),
            'carbs_per_value'     => random_int(1,500),
            'sugars_per_value'    => random_int(1,1000),
            'fibre_per_value'     => random_int(1,100),
            'protein_per_value'   => random_int(1,50),
            'salt_per_value'      => random_int(1,3),
        ];
    }

    public function withValue()
    {
        return $this->state(function (array $attributes) {
            return [
                'value_id' => IngredientValue::inRandomOrder()->first()->id,
            ];
        });
    }
}
