<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateClientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('clients', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            //Foreign keys
            $table->unsignedBigInteger('address_id');
            $table->foreign('address_id')->references('id')->on('addresses');

            $table->unsignedBigInteger('contact_id');
            $table->foreign('contact_id')->references('id')->on('contacts');
            

            //Personal data
            $table->string('CPF');
            $table->string('RG');
            $table->string('name');
            $table->date('birthdate');
            $table->string('email');
            $table->string('password');
            
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
        Schema::dropIfExists('clients');
    }
}
