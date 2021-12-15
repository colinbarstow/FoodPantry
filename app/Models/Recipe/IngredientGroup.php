<?php

namespace App\Models\Recipe;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class IngredientGroup extends Model
{
    use HasFactory;

    protected $fillable = [
        'name'
    ];

    /**
     * return the related ingredients.
     *
     * @return BelongsToMany
     */
    public function ingredients(): BelongsToMany
    {
        return $this->belongsToMany(Ingredient::class);
    }
}
