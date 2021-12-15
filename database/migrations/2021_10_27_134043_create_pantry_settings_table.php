<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePantrySettingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pantry_settings', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('pantry_id');
            $table->boolean('include_salt_and_pepper_in_recipe_search')->default(1);
            $table->boolean('allow_recipes_with_additional_ingredients')->default(0);
            $table->tinyInteger('measurement_id')->default(1);
            $table->tinyInteger('shop_id')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pantry_settings');
    }
}
