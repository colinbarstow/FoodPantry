<?php

namespace App\Models\Recipe;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class RecipeCollection extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'parent_collection_id',
        'name',
        'slug',
        'description',
        'main_image',
        'main_image_thumbnail',
        'banner_image',
        'active',
    ];

    protected $casts = [
        'active'   => 'boolean',
        'promoted' => 'boolean'
    ];

    /**
     * Return related recipes
     *
     * @return HasMany
     */
    public function recipes(): HasMany
    {
        return $this->hasMany(Recipe::class);
    }
}
