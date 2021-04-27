import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroFornecedor01Page } from './cadastro-fornecedor01.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroFornecedor01Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroFornecedor01PageRoutingModule {}
