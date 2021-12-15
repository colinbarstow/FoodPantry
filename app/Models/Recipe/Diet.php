<?php

namespace App\Models\Recipe;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Diet extends Model
{
    use HasFactory;

    const VEGAN = 1;
    const VEGETARIAN = 2;
    const PESCATARIAN = 3;
    const FLEXITARIAN = 4;
    const MEATEATER = 5;

    protected $fillable = [
        'name'
    ];

    /**
     * return the related ingredients
     *
     * @return BelongsToMany
     */
    public function ingredients(): BelongsToMany
    {
        return $this->belongsToMany(Ingredient::class);
    }

}
