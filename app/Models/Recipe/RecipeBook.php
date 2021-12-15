<?php

namespace App\Models\Recipe;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\BelongsToManyRelationship;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class RecipeBook extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'name',
        'week_start'
    ];

    protected $casts = [
        'week_start' => 'date'
    ];

    /**
     * Return user relationship
     *
     * @return BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Return recipe relationships
     *
     * @return BelongsToMany
     */
    public function recipes(): BelongsToMany
    {
        return $this->belongsToMany(Recipe::class)->withPivot('meal_type');
    }


}
