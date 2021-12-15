<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateIngredientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ingredients', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('slug');
            $table->text('description');
            $table->string('main_image');
            $table->string('main_image_thumbnail');
            $table->string('banner_image');
            $table->boolean('promoted')->default(0);
            $table->timestamps();
        });

        Schema::create('ingredient_pantry', function (Blueprint $table) {
            $table->bigInteger('ingredient_id');
            $table->bigInteger('pantry_id');
            $table->integer('amount');
            $table->unique(['ingredient_id', 'pantry_id']);
        });

        Schema::create('diet_ingredient', function (Blueprint $table) {
            $table->bigInteger('diet_id');
            $table->bigInteger('ingredient_id');
            $table->unique(['ingredient_id', 'diet_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ingredients');
        Schema::dropIfExists('ingredient_pantry');
        Schema::dropIfExists('diet_ingredient');
    }
}
