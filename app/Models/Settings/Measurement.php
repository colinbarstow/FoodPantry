<?php

namespace App\Models\Settings;

use App\Models\Pantry\PantrySetting;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Measurement extends Model
{
    use HasFactory;

    const METRIC = 1;
    const IMPERIAL = 2;

    protected $fillable = [
        'name'
    ];

    /**
     * Return the related pantry settings
     *
     * @return HasMany
     */
    public function pantrySettings(): HasMany
    {
        return $this->hasMany(PantrySetting::class);
    }
}
