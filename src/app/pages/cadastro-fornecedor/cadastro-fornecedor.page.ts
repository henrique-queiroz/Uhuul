import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-fornecedor',
  templateUrl: './cadastro-fornecedor.page.html',
  styleUrls: ['./cadastro-fornecedor.page.scss'],
})
export class CadastroFornecedorPage implements OnInit {

  constructor(private router: Router) { }

  home() {
    this.router.navigate(['/home']);
  }

  cadastro_empresa() {
    this.router.navigate(['/cadastro-fornecedor01']);
  }


  ngOnInit() {
  }

}
