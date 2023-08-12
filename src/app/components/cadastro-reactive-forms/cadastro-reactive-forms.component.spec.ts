import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroReactiveFormsComponent } from './cadastro-reactive-forms.component';

describe('CadastroReactiveFormsComponent', () => {
  let component: CadastroReactiveFormsComponent;
  let fixture: ComponentFixture<CadastroReactiveFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroReactiveFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
