<?php

namespace Database\Seeders;

use App\Models\Pantry\Pantry;
use App\Models\Permission;
use App\Models\Recipe\Diet;
use App\Models\Recipe\Ingredient;
use App\Models\Recipe\IngredientDetail;
use App\Models\Recipe\IngredientGroup;
use App\Models\Recipe\IngredientValue;
use App\Models\Recipe\ParentCollection;
use App\Models\Recipe\Recipe;
use App\Models\Recipe\RecipeBook;
use App\Models\Recipe\RecipeCollection;
use App\Models\Recipe\RecipeDetail;
use App\Models\Recipe\RecipeMethod;
use App\Models\Role;
use App\Models\Settings\Measurement;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        Role::factory()->times(5)->create();
        Permission::factory()->times(8)->create();

        $roles = Role::all();
        foreach($roles as $role){
            if($role->name == 'Administrator'){
                $permissions = Permission::pluck('id')->toArray();
                $role->permissions()->syncWithPivotValues($permissions, [
                    'view'   => true,
                    'create' => true,
                    'update' => true,
                    'delete' => true,
                ]);
            } else {
                $permissions = Permission::all()->take(rand(1,8));
                $role->permissions()->syncWithPivotValues($permissions, [
                    'view'   => rand(0,1),
                    'create' => rand(0,1),
                    'update' => rand(0,1),
                    'delete' => rand(0,1),
                ]);
            }
        }

        Measurement::create([
            'name' => 'metric'
        ]);

        Measurement::create([
            'name' => 'imperial'
        ]);

        Diet::create(['name' => 'vegan']);
        Diet::create(['name' => 'vegetarian']);
        Diet::create(['name' => 'pescatarian']);
        Diet::create(['name' => 'flexitarian']);
        Diet::create(['name' => 'meat eater']);

        IngredientGroup::factory()->times(10)->create();

        $users = User::factory()->times(10)->create();

        IngredientValue::factory()->times(6)->create();

        $vegetables = Ingredient::factory()
            ->times(10)
            ->vegetable()
            ->create();

        $this->createIngredientRelationships($vegetables, false);

        $meats = Ingredient::factory()
            ->times(10)
            ->meat()
            ->create();

        $this->createIngredientRelationships($meats, true);

        $fruits = Ingredient::factory()
            ->times(10)
            ->fruit()
            ->create();

        $this->createIngredientRelationships($fruits, false);

        $dairys = Ingredient::factory()
            ->times(10)
            ->dairy()
            ->create();

        $this->createIngredientRelationships($dairys, true);

        ParentCollection::factory()
            ->times(5)
            ->create();

        RecipeCollection::factory()
            ->times(15)
            ->create();

        $recipes = Recipe::factory()
            ->times(20)
            ->create();

        foreach($recipes as $recipe){

            $count = rand(4,15);

            for($x = 1; $x <= $count; $x++){
                RecipeMethod::factory()->create(['recipe_id' => $recipe->id, 'position' => $x]);
            }

            $ingredients = Ingredient::inRandomOrder()->take(rand(10,15))->get();

            foreach($ingredients as $ingredient){
                $recipe->ingredients()->attach($ingredient, ['amount' => rand(1,500)]);
            }

            RecipeDetail::factory()->create(['recipe_id' => $recipe->id]);
        }

        foreach(Pantry::all() as $pantry){
            $ingredients = Ingredient::inRandomOrder()->limit(rand(1,30))->get();
            foreach($ingredients as $ingredient){
                $pantry->ingredients()->attach($ingredient, ['amount' => rand(1,500)]);
            }
        }

        foreach($users as $user){
            RecipeBook::factory()->times(rand(1,5))->create(['user_id' => $user->id]);
        }

        $recipeBooks = RecipeBook::all();

        foreach($recipeBooks as $recipeBook){
            $recipes = Recipe::inRandomOrder()->limit(rand(5,20))->get();
            foreach($recipes as $recipe){
                $recipeBook->recipes()->attach($recipe, ['meal_type' => rand(1,4)]);
            }
        }
    }

    private function createIngredientRelationships($ingredients, $withValue)
    {
        foreach ($ingredients as $ingredient){

            if($withValue){
                IngredientDetail::factory()->withValue()->create(['ingredient_id' => $ingredient->id]);
            } else {
                IngredientDetail::factory()->create(['ingredient_id' => $ingredient->id]);
            }

            $groups = IngredientGroup::inRandomOrder()->limit(rand(1,3))->get();

            foreach ($groups as $group){
                $ingredient->ingredientGroups()->attach($group);
            }

            $diets = Diet::inRandomOrder()->limit(rand(1,2))->get();

            foreach ($diets as $diet){
                $ingredient->diets()->attach($diet);
            }
        }
    }
}
