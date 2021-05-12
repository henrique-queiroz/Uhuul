import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventosServicosPage } from './eventos-servicos.page';

const routes: Routes = [
  {
    path: '',
    component: EventosServicosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventosServicosPageRoutingModule {}
