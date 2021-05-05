import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventosGeralPageRoutingModule } from './eventos-geral-routing.module';

import { EventosGeralPage } from './eventos-geral.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventosGeralPageRoutingModule
  ],
  declarations: [EventosGeralPage]
})
export class EventosGeralPageModule {}
