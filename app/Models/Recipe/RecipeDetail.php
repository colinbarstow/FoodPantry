<?php

namespace App\Models\Recipe;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class RecipeDetail extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'recipe_id',
        'preparation_time',
        'cooking_time',
        'kcal',
        'fat',
        'saturates',
        'carbs',
        'sugars',
        'fibre',
        'protein',
        'salt',
    ];

    /**
     * Return the recipe relationship
     *
     * @return BelongsTo
     */
    public function recipe(): BelongsTo
    {
        return $this->belongsTo(Recipe::class);
    }
}
