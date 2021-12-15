<?php

namespace Database\Factories;

use App\Models\Permission;
use Illuminate\Database\Eloquent\Factories\Factory;

class PermissionFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Permission::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $permissions = [
            'user management',
            'content management',
            'financial management',
            'reporting',
            'payroll',
            'disputes management',
            'api controls',
            'repository management',
        ];

        return [
            'name'       => $p = $this->faker->unique()->randomElement($permissions),
            'guard_name' => $p
        ];
    }

}
