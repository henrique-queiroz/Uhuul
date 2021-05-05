<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEventsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::dropIfExists('events');

        Schema::create('events', function (Blueprint $table) {
            
            $table->id();
            $table->timestamps();
            
            //foreign keys
            $table->unsignedBigInteger('client_id');
            $table->foreign('client_id')->references('id')->on('client');

            $table->integer('id');
            $table->datetime('start_date');
            $table->datetime('finish_date');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('events');
    }
}
