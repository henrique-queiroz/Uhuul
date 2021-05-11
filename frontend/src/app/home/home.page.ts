import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public options: Array<any> = [
    {imagem:'/assets/Imagem_1.png', chamada: 'Organize qualquer tipo de evento!', texto: 'Com o Uhuu! você pode realizar desde casamentos até festas de debutante'},
    {imagem:'/assets/Imagem_2.png', chamada: 'Escolha os serviços que deseja contratar', texto: 'Aqui, você pode ter total controle de qual vai ser o Buffet ou então, em qual salão de beleza, serão recepcionados os seus convidados'},
    {imagem:'/assets/Imagem_3.png', chamada: 'Envie convites aos convidados facilmente', texto: 'Através do Uhuu! você pode convidar os seus familiares e amigos facilmente, através do sistema de convites que é muito simples'},
    {imagem:'/assets/Imagem_4.png', chamada: 'Comunique-se com flexibilidade', texto: 'Evite problemas de comunicação através do nosso eficiente chat, que pode ser uma mão na roda para a organização de eventos'}
  ];

  public infos: Array<any> = [
    {pergunta: 'Como começamos?', resposta: 'Inicialmente, começamos a atuar com realização de cerimônias e assessoria a eventos em 20...(coletar essa data com o cliente) . Já atendemos diversos clientes, em diversos tipos de ocasiões, como casamentos, festas de debutante, etc.', icone1: 'chevron-down-outline', icone2: 'chevron-up-outline'},
    {pergunta: 'Quais tipos de eventos organizamos?', resposta: '...', icone1: 'chevron-down-outline', icone2: 'chevron-up-outline'},
    {pergunta: 'Quem somo atualmente?', resposta: '...', icone1: 'chevron-down-outline', icone2: 'chevron-up-outline'}
  ];

  constructor() {}
  scroll(el: HTMLElement) {
    el.scrollIntoView();
}
}