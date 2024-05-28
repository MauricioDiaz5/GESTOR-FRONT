import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternarComponent } from './internar.component';

describe('InternarComponent', () => {
  let component: InternarComponent;
  let fixture: ComponentFixture<InternarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
