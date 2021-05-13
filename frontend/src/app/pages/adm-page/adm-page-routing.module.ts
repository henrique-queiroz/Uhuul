import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdmPagePage } from './adm-page.page';

const routes: Routes = [
  {
    path: '',
    component: AdmPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdmPagePageRoutingModule {}
