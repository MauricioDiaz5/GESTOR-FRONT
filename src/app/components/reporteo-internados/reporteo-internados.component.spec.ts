import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteoInternadosComponent } from './reporteo-internados.component';

describe('ReporteoInternadosComponent', () => {
  let component: ReporteoInternadosComponent;
  let fixture: ComponentFixture<ReporteoInternadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteoInternadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteoInternadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
