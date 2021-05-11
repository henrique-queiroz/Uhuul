import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CadastroFornecedor02Page } from './cadastro-fornecedor02.page';

describe('CadastroFornecedor02Page', () => {
  let component: CadastroFornecedor02Page;
  let fixture: ComponentFixture<CadastroFornecedor02Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroFornecedor02Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CadastroFornecedor02Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
