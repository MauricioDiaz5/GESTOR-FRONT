import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnfermerosComponent } from './enfermeros.component';

describe('EnfermerosComponent', () => {
  let component: EnfermerosComponent;
  let fixture: ComponentFixture<EnfermerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnfermerosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnfermerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
