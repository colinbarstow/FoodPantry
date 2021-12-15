<?php

namespace App\Models\Recipe;

use App\Models\Pantry\Pantry;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Support\Str;

class Ingredient extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'slug',
        'description',
        'main_image',
        'main_image_thumbnail',
        'banner_image',
        'promoted',
    ];

    protected $casts = [
        'promoted' => 'boolean'
    ];

    protected $with = ['ingredientDetails', 'ingredientGroups', 'diets'];

    /**
     * Set the ingredient's name
     *
     * @param $value
     */
    public function setNameAttribute($value)
    {
        $this->attributes['name'] = trim(strtolower($value));
    }

    /**
     * Get the ingredient's name
     *
     * @param $value
     * @return string
     */
    public function getNameAttribute($value): string
    {
        return Str::title($value);
    }

    /**
     * Set the users first name
     *
     * @param $value
     */
    public function setSlugAttribute($value)
    {
        $spacesRemoved = str_replace(' ', '-', $value);
        $slug = preg_replace('/[^A-Za-z0-9\-]/', '', $spacesRemoved);

        $i = 1;

        $name = $slug;

        while(Ingredient::where('id', '!=', $this->id)
            ->where('slug', $slug)
            ->first()) {
            $actual_name = $slug .'-'.$i;
            $name = $actual_name;
            $i++;
        }

        $this->attributes['slug'] = trim(strtolower($name));
    }

    /**
     * return the details relationship
     *
     * @return HasOne
     */
    public function ingredientDetails(): HasOne
    {
        return $this->hasOne(IngredientDetail::class);
    }

    /**
     * return the related ingredient groups
     *
     * @return BelongsToMany
     */
    public function ingredientGroups(): BelongsToMany
    {
        return $this->belongsToMany(IngredientGroup::class);
    }

    /**
     * return the related pantries
     *
     * @return BelongsToMany
     */
    public function pantries(): BelongsToMany
    {
        return $this->belongsToMany(Pantry::class)->withPivot('amount');
    }

    /**
     * return the related diets
     *
     * @return BelongsToMany
     */
    public function diets(): BelongsToMany
    {
        return $this->belongsToMany(Diet::class);
    }
}
