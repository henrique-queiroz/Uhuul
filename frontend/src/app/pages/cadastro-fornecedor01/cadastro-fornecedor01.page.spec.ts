import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CadastroFornecedor01Page } from './cadastro-fornecedor01.page';

describe('CadastroFornecedor01Page', () => {
  let component: CadastroFornecedor01Page;
  let fixture: ComponentFixture<CadastroFornecedor01Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroFornecedor01Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CadastroFornecedor01Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
