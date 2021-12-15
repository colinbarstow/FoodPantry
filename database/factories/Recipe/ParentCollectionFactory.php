<?php

namespace Database\Factories\Recipe;

use App\Models\Recipe\ParentCollection;
use FakerRestaurant\Provider\en_US\Restaurant;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Http\File;
use Illuminate\Support\Facades\Storage;

class ParentCollectionFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = ParentCollection::class;

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
            'name' => $name = $this->faker->foodName(),
            'slug' => $name,
            'description' => $this->faker->text,
//            'main_image' => Storage::disk('public')->putFile('parent_collection/images', $imageFile),
            'main_image' => 'test_image',
//            'main_image_thumbnail' => Storage::disk('public')->putFile('parent_collection/images/thumbnails', $imageFile),
            'main_image_thumbnail' => 'test_image',
//            'banner_image' => Storage::disk('public')->putFile('parent_collection/images/banner', $imageFile),
            'banner_image' => 'test_image',
            'active' => $this->faker->boolean
        ];
    }
}
