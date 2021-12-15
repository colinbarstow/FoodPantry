<?php

namespace App\Models;

use App\Models\Pantry\Pantry;
use App\Models\Recipe\RecipeBook;
use App\Traits\HasPermission;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasApiTokens, HasFactory, Notifiable, HasPermission;

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'first_name',
        'last_name',
        'mobile_number',
        'email',
        'password',
        'role_id',
        'is_admin',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at'         => 'datetime',
        'mobile_number_verified_at' => 'datetime',
        'is_admin'                  => 'boolean'
    ];

    /**
     * Set the users first name
     *
     * @param $value
     */
    public function setFirstNameAttribute($value)
    {
        $this->attributes['first_name'] = trim(strtolower($value));
    }

    /**
     * Set the users last name
     *
     * @param $value
     */
    public function setLastNameAttribute($value)
    {
        $this->attributes['last_name'] = trim(strtolower($value));
    }

    /**
     * Set the users email
     *
     * @param $value
     */
    public function setEmailAttribute($value)
    {
        $this->attributes['email'] = trim(strtolower($value));
    }

    /**
     * Returns role relationship
     *
     * @return BelongsTo
     */
    public function role(): BelongsTo
    {
        return $this->belongsTo(Role::class);
    }


    /**
     * return the pantry relationship
     *
     * @return HasOne
     */
    public function pantry(): HasOne
    {
        return $this->hasOne(Pantry::class);
    }

    /**
     * returns recipe books relationships
     *
     * @return HasMany
     */
    public function recipeBooks(): HasMany
    {
        return $this->hasMany(RecipeBook::class);
    }
}
