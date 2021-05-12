import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventosServicosPageRoutingModule } from './eventos-servicos-routing.module';

import { EventosServicosPage } from './eventos-servicos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventosServicosPageRoutingModule
  ],
  declarations: [EventosServicosPage]
})
export class EventosServicosPageModule {}
