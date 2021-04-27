import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroFornecedor01PageRoutingModule } from './cadastro-fornecedor01-routing.module';

import { CadastroFornecedor01Page } from './cadastro-fornecedor01.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroFornecedor01PageRoutingModule
  ],
  declarations: [CadastroFornecedor01Page]
})
export class CadastroFornecedor01PageModule {}
