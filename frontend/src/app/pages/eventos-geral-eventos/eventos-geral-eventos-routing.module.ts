import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventosGeralEventosPage } from './eventos-geral-eventos.page';

const routes: Routes = [
  {
    path: '',
    component: EventosGeralEventosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventosGeralEventosPageRoutingModule {}
