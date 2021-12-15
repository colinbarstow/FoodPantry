<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRecipeBooksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('recipe_books', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('user_id');
            $table->string('name');
            $table->date('week_start')->nullable();
            $table->timestamps();
        });

        Schema::create('recipe_recipe_book', function (Blueprint $table) {
            $table->bigInteger('recipe_id');
            $table->bigInteger('recipe_book_id');
            $table->tinyInteger('meal_type');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('recipe_books');
        Schema::dropIfExists('recipe_recipe_book');
    }
}
