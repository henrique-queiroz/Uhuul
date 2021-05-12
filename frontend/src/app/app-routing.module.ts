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
  },
  {
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
  {
    path: 'login-cliente',
    loadChildren: () => import('./pages/login-cliente/login-cliente.module').then( m => m.LoginClientePageModule)
  },
  {
    path: 'eventos-geral',
    loadChildren: () => import('./pages/eventos-geral/eventos-geral.module').then( m => m.EventosGeralPageModule)
  },  {
    path: 'eventos-geral-eventos',
    loadChildren: () => import('./pages/eventos-geral-eventos/eventos-geral-eventos.module').then( m => m.EventosGeralEventosPageModule)
  },
  {
    path: 'eventos-servicos',
    loadChildren: () => import('./pages/eventos-servicos/eventos-servicos.module').then( m => m.EventosServicosPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }