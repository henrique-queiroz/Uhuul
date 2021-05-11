import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-fornecedor01',
  templateUrl: './cadastro-fornecedor01.page.html',
  styleUrls: ['./cadastro-fornecedor01.page.scss'],
})
export class CadastroFornecedor01Page implements OnInit {

  constructor(private router: Router) { }

  cadastro_empresa() {
    this.router.navigate(['/cadastro-fornecedor']);
  }

  cadastro_empresa2() {
    this.router.navigate(['/cadastro-fornecedor02']);
  }


  ngOnInit() {
  }

}
