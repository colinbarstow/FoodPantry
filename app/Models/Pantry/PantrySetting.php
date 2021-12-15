<?php

namespace App\Models\Pantry;

use App\Models\Settings\Measurement;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class PantrySetting extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'pantry_id',
        'include_salt_and_pepper_in_recipe_search',
        'allow_recipes_with_additional_ingredients',
        'measurement_id',
        'shop_id',
    ];

    protected $casts = [
        'include_salt_and_pepper_in_recipe_search' => 'boolean',
        'allow_recipes_with_additional_ingredients' => 'boolean',
    ];

    /**
     * Return the pantry relationship
     *
     * @return BelongsTo
     */
    public function pantry(): BelongsTo
    {
        return $this->belongsTo(Pantry::class);
    }

    /**
     * Return the measurement relationship
     *
     * @return BelongsTo
     */
    public function measurement(): BelongsTo
    {
        return $this->belongsTo(Measurement::class);
    }

}
