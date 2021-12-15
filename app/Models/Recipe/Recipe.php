<?php

namespace App\Models\Recipe;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;

class Recipe extends Model
{
    use HasFactory, SoftDeletes;

    const EASY = 1;
    const MEDIUM = 2;
    const HARD = 3;
    const EXPERT = 4;
    const BREAKFAST = 1;
    const LUNCH = 2;
    const DINNER = 3;
    const SNACK = 4;

    protected $fillable = [
        'recipe_collection_id',
        'name',
        'slug',
        'description',
        'main_image',
        'main_image_thumbnail',
        'banner_image',
        'status',
        'promoted',
    ];

    protected $casts = [
        'status'   => 'boolean',
        'promoted' => 'boolean'
    ];

    public function getDifficultyAttribute($value)
    {
        switch ($value){
            case self::EASY:
                return 'Easy';
            case self::MEDIUM:
                return 'Medium';
            case self::HARD:
                return 'Hard';
            case self::EXPERT:
                return 'Expert';
        }
    }

    /**
     * Return the recipe collection relationship
     *
     * @return BelongsTo
     */
    public function recipeCollection(): BelongsTo
    {
        return $this->belongsTo(RecipeCollection::class);
    }

    /**
     * Return the details relationship
     *
     * @return HasOne
     */
    public function details(): HasOne
    {
        return $this->hasOne(RecipeDetail::class);
    }

    /**
     * Return the ingredients related to the recipe
     *
     * @return BelongsToMany
     */
    public function ingredients(): BelongsToMany
    {
        return $this->belongsToMany(Ingredient::class)->withPivot('amount');
    }

    /**
     * Return the methods related to the recipe
     *
     * @return HasMany
     */
    public function methods(): HasMany
    {
        return $this->hasMany(RecipeMethod::class);
    }

    /**
     * Return recipe book relationships
     *
     * @return BelongsToMany
     */
    public function recipesBooks(): BelongsToMany
    {
        return $this->belongsToMany(RecipeBook::class)->withPivot('meal_type');
    }
}
