<?php

namespace App\Traits;

use App\Models\Permission;

trait HasPermission
{
    /**
     * Check if user has permission for specific action.
     *
     * @param Permission $permission
     * @param $action
     * @return bool
     */
    public function hasPermissionTo(Permission $permission, $action): bool
    {
        if($this->role->permissions->contains($permission)){
            $p = $this->getPermission($permission);
            return $p->pivot->$action;
        }

        return false;
    }

    /**
     * Get a specific permission related to the role
     *
     * @param $permission
     * @return mixed
     */
    private function getPermission($permission)
    {
        return $this->role->permissions()->where('permission_id', $permission->id)->first();
    }

}
