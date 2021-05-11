import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroFornecedor02PageRoutingModule } from './cadastro-fornecedor02-routing.module';

import { CadastroFornecedor02Page } from './cadastro-fornecedor02.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroFornecedor02PageRoutingModule
  ],
  declarations: [CadastroFornecedor02Page]
})
export class CadastroFornecedor02PageModule {}
