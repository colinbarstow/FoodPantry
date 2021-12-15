<?php

namespace App\Models\Recipe;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class ParentCollection extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name',
        'slug',
        'description',
        'main_image',
        'main_image_thumbnail',
        'banner_image',
        'active',
    ];

    protected $casts = [
        'active' => 'boolean'
    ];

    /**
     * Return related collections
     *
     * @return HasMany
     */
    public function collections(): HasMany
    {
        return $this->hasMany(RecipeCollection::class);
    }
}
