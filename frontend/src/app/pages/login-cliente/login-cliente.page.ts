import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-cliente',
  templateUrl: './login-cliente.page.html',
  styleUrls: ['./login-cliente.page.scss'],
})
export class LoginClientePage implements OnInit {

  constructor(private router: Router) { }

  home() {
    this.router.navigate(['/home']);
  }

  cadastro() {
    this.router.navigate(['/cadastro-cliente']);
  }

  home_page_sistema() {
    this.router.navigate(['/eventos-geral']);
  }

  ngOnInit() {
  }

}
