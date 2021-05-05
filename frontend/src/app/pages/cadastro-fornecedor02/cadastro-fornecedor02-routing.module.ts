import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroFornecedor02Page } from './cadastro-fornecedor02.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroFornecedor02Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroFornecedor02PageRoutingModule {}
