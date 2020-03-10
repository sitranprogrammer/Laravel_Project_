<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('id_catalog');
            $table->integer('id_host');
            $table->string('code',100);
            $table->string('name');
            $table->string('alias');
            $table->integer('unit_price');
            $table->integer('promotion_price');
            $table->tinyInteger('qty');
            $table->string('color');
            $table->string('image');
            $table->text('content');
            $table->tinyInteger('coupon');
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
        Schema::dropIfExists('product');
    }
}
