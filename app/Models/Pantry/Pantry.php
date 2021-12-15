<?php

namespace App\Models\Pantry;

use App\Models\Recipe\Ingredient;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Pantry extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id'
    ];

    /**
     * Return the user relationship
     *
     * @return BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * return the pantry settings relationship
     *
     * @return HasOne
     */
    public function settings(): HasOne
    {
        return $this->hasOne(PantrySetting::class, 'pantry_id');
    }

    /**
     * return the related ingredients
     *
     * @return BelongsToMany
     */
    public function ingredients(): BelongsToMany
    {
        return $this->belongsToMany(Ingredient::class)->withPivot('amount');
    }
}
