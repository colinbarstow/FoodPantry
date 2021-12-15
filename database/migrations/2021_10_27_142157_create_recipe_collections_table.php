<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRecipeCollectionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('recipe_collections', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('parent_collection_id');
            $table->string('name');
            $table->string('slug');
            $table->text('description');
            $table->string('main_image');
            $table->string('main_image_thumbnail');
            $table->string('banner_image');
            $table->boolean('active');
            $table->boolean('promoted')->default(0);
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
        Schema::dropIfExists('recipe_collections');
    }
}
