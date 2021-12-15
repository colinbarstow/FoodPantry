<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Str;

class Role extends Model
{
    use HasFactory;

    /**
     * Set the name
     *
     * @param $value
     */
    public function setNameAttribute($value)
    {
        $this->attributes['name'] = trim(strtolower($value));
    }

    /**
     * Get the name
     *
     * @param $value
     * @return string
     */
    public function getNameAttribute($value): string
    {
        return Str::title($value);
    }

    /**
     * returns related users
     * @return HasMany
     */
    public function users(): HasMany
    {
        return $this->hasMany(User::class);
    }

    /**
     * Returns related permissions
     *
     * @return BelongsToMany
     */
    public function permissions(): BelongsToMany
    {
        return $this->belongsToMany(Permission::class)->withPivot('view', 'create', 'update', 'delete');
    }
}
