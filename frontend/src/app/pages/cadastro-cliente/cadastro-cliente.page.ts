import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.page.html',
  styleUrls: ['./cadastro-cliente.page.scss'],
})
export class CadastroClientePage implements OnInit {

  constructor(private router: Router) { }

  home() {
    this.router.navigate(['/home']);
  }

  login() {
    this.router.navigate(['/login-cliente']);
  }

  home_page_sistema() {
    this.router.navigate(['/eventos-geral']);
  }

  ngOnInit() {
  }

}
