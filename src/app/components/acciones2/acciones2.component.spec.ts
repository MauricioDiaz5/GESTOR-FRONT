import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Acciones2Component } from './acciones2.component';

describe('Acciones2Component', () => {
  let component: Acciones2Component;
  let fixture: ComponentFixture<Acciones2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Acciones2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Acciones2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
