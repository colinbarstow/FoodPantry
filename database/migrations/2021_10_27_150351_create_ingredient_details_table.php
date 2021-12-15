<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateIngredientDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ingredient_details', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('ingredient_id');
            $table->integer('kcal_per_value')->nullable();
            $table->integer('fat_per_value')->nullable();
            $table->integer('saturates_per_value')->nullable();
            $table->integer('carbs_per_value')->nullable();
            $table->integer('sugars_per_value')->nullable();
            $table->integer('fibre_per_value')->nullable();
            $table->integer('protein_per_value')->nullable();
            $table->integer('salt_per_value')->nullable();
            $table->integer('value_id')->nullable();
            $table->integer('value_count');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ingredient_details');
    }
}
