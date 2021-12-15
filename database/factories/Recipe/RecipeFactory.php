<?php

namespace Database\Factories\Recipe;

use App\Models\Recipe\Recipe;
use App\Models\Recipe\RecipeCollection;
use FakerRestaurant\Provider\en_US\Restaurant;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Http\File;
use Illuminate\Support\Facades\Storage;

class RecipeFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Recipe::class;

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
            'recipe_collection_id' => RecipeCollection::inRandomOrder()->first()->id,
            'name' => $name = $this->faker->foodName(),
            'slug' => $name,
            'description' => $this->faker->text,
            'main_image' => 'test_image',
//            'main_image' => Storage::disk('public')->putFile('recipes/images', $imageFile),
            'main_image_thumbnail' => 'test_image',
//            'main_image_thumbnail' => Storage::disk('public')->putFile('recipes/images/thumbnails', $imageFile),
            'banner_image' => 'test_image',
//            'banner_image' => Storage::disk('public')->putFile('recipes/images/banner', $imageFile),
            'active' => $this->faker->boolean,
            'difficulty' => rand(1,4),
            'meal_type' => rand(1,4)
        ];
    }
}
