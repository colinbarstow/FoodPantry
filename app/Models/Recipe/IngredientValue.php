<?php

namespace App\Models\Recipe;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class IngredientValue extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description'
    ];
}
