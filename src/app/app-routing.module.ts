import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'cadastro-fornecedor',
    loadChildren: () => import('./pages/cadastro-fornecedor/cadastro-fornecedor.module').then( m => m.CadastroFornecedorPageModule)
  },  {
    path: 'cadastro-fornecedor01',
    loadChildren: () => import('./pages/cadastro-fornecedor01/cadastro-fornecedor01.module').then( m => m.CadastroFornecedor01PageModule)
  },
  {
    path: 'cadastro-fornecedor02',
    loadChildren: () => import('./pages/cadastro-fornecedor02/cadastro-fornecedor02.module').then( m => m.CadastroFornecedor02PageModule)
  },
  {
    path: 'cadastro-cliente',
    loadChildren: () => import('./pages/cadastro-cliente/cadastro-cliente.module').then( m => m.CadastroClientePageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
