import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-fornecedor02',
  templateUrl: './cadastro-fornecedor02.page.html',
  styleUrls: ['./cadastro-fornecedor02.page.scss'],
})
export class CadastroFornecedor02Page implements OnInit {

  constructor(private router: Router) { }

  cadastro_empresa1() {
    this.router.navigate(['/cadastro-fornecedor01']);
  }

  home() {
    this.router.navigate(['/home']);
  }

  ngOnInit() {
  }

}
