import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemTesteComponent } from './listagem-teste.component';

describe('ListagemTesteComponent', () => {
  let component: ListagemTesteComponent;
  let fixture: ComponentFixture<ListagemTesteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemTesteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListagemTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
