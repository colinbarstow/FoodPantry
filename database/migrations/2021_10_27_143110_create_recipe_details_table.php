<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRecipeDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('recipe_details', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('recipe_id');
            $table->integer('preparation_time');
            $table->integer('cooking_time')->nullable();
            $table->integer('kcal')->nullable();
            $table->integer('fat')->nullable();
            $table->integer('saturates')->nullable();
            $table->integer('carbs')->nullable();
            $table->integer('sugars')->nullable();
            $table->integer('fibre')->nullable();
            $table->integer('protein')->nullable();
            $table->integer('salt')->nullable();
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
        Schema::dropIfExists('recipe_details');
    }
}
