<?php

namespace App\Models\Recipe;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class RecipeMethod extends Model
{
    use HasFactory;

    protected $fillable = [
        'recipe_id',
        'position',
        'step_description'
    ];

    /**
     * Returns the recipe relationship
     *
     * @return BelongsTo
     */
    public function recipe(): BelongsTo
    {
        return $this->belongsTo(Recipe::class);
    }
}
