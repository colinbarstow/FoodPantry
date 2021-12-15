<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Support\Str;

class Permission extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'guard_name'
    ];

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
     * Set the name
     *
     * @param $value
     */
    public function setGuardNameAttribute($value)
    {
        $this->attributes['guard_name'] = trim(str_replace(' ', '-', strtolower($value)));
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

    public function getPrettyNameForRole($role)
    {
        $permission = $role->permissions()->where('permission_id', $this->id)->first();
        if($permission->pivot->view &&
        $permission->pivot->create &&
        $permission->pivot->update &&
        $permission->pivot->delete) return "Full Control {$this->name}";

        $view   = $permission->pivot->view ? 'view'   : null;
        $create = $permission->pivot->create ? 'create' : null;
        $update = $permission->pivot->delete ? 'update' : null;
        $delete = $permission->pivot->update ? 'delete' : null;

        return Str::title($view . ' ' . $create . ' ' . $update . ' ' . $delete . ' ' . $this->name);
    }

    /**
     * Returns the roles relationships
     *
     * @return BelongsToMany
     */
    public function roles(): BelongsToMany
    {
        return $this->belongsToMany(Role::class)->withPivot('view', 'create', 'update', 'delete');
    }
}
