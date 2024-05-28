import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitadosComponent } from './citados.component';

describe('CitadosComponent', () => {
  let component: CitadosComponent;
  let fixture: ComponentFixture<CitadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
