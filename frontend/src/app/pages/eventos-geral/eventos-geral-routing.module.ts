import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventosGeralPage } from './eventos-geral.page';

const routes: Routes = [
  {
    path: '',
    component: EventosGeralPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventosGeralPageRoutingModule {}
