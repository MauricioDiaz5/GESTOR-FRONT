import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteInternadoComponent } from './paciente-internado.component';

describe('PacienteInternadoComponent', () => {
  let component: PacienteInternadoComponent;
  let fixture: ComponentFixture<PacienteInternadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacienteInternadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PacienteInternadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
