<?php

namespace Database\Factories\Recipe;

use App\Models\Recipe\Ingredient;
use App\Models\Recipe\IngredientDetail;
use FakerRestaurant\Provider\en_US\Restaurant;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Http\File;
use Illuminate\Support\Facades\Storage;

class IngredientFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Ingredient::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
//        $image = $this->faker->image();
//        $imageFile = new File($image);

        $this->faker->addProvider(new Restaurant($this->faker));

        return [
            'description' => $this->faker->text,
//            'main_image' => Storage::disk('public')->putFile('ingredient/images', $imageFile),
            'main_image' => 'test_image',
//            'main_image_thumbnail' => Storage::disk('public')->putFile('ingredient/images/thumbnails', $imageFile),
            'main_image_thumbnail' => 'test_image',
//            'banner_image' => Storage::disk('public')->putFile('ingredient/images/banner', $imageFile),
            'banner_image' => 'test_image',
        ];

    }

    public function vegetable()
    {
        return $this->state(function (array $attributes) {
            return [
                'name' => $name = $this->faker->vegetableName(),
                'slug' => $name
            ];
        });
    }

    public function meat()
    {
        return $this->state(function (array $attributes) {
            return [
                'name' => $name = $this->faker->meatName(),
                'slug' => $name
            ];
        });
    }

    public function dairy()
    {
        return $this->state(function (array $attributes) {
            return [
                'name' => $name = $this->faker->dairyName(),
                'slug' => $name
            ];
        });
    }

    public function fruit()
    {
        return $this->state(function (array $attributes) {
            return [
                'name' => $name = $this->faker->fruitName(),
                'slug' => $name
            ];
        });
    }
}
