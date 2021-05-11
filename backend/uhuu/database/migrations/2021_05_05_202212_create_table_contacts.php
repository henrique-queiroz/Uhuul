<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTableContacts extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('table_contacts', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            //Foreign keys
            $table->unsignedBigInteger('typeContact_id');
            $table->foreign('typeContact_id')->references('id')->on('types_contacts');

            $table->string('value');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('table_contacts');
    }
}
