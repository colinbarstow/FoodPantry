<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRecipesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('recipes', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('recipe_collection_id');
            $table->string('name');
            $table->string('slug');
            $table->text('description');
            $table->string('main_image');
            $table->string('main_image_thumbnail');
            $table->string('banner_image');
            $table->boolean('active');
            $table->boolean('promoted')->default(0);
            $table->tinyInteger('difficulty');
            $table->tinyInteger('meal_type');
            $table->timestamps();
            $table->softDeletes();
        });

        Schema::create('ingredient_recipe', function (Blueprint $table) {
            $table->bigInteger('recipe_id');
            $table->bigInteger('ingredient_id');
            $table->integer('amount');
            $table->unique(['recipe_id','ingredient_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('recipes');
        Schema::dropIfExists('ingredient_recipe');
    }
}
