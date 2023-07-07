import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalcontatoComponent } from './modalcontato.component';

describe('ModalcontatoComponent', () => {
  let component: ModalcontatoComponent;
  let fixture: ComponentFixture<ModalcontatoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalcontatoComponent]
    });
    fixture = TestBed.createComponent(ModalcontatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
