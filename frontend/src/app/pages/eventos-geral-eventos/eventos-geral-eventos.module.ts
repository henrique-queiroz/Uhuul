import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventosGeralEventosPageRoutingModule } from './eventos-geral-eventos-routing.module';

import { EventosGeralEventosPage } from './eventos-geral-eventos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventosGeralEventosPageRoutingModule
  ],
  declarations: [EventosGeralEventosPage]
})
export class EventosGeralEventosPageModule {}
