import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratesalaryformonthComponent } from './generatesalaryformonth.component';

describe('GeneratesalaryformonthComponent', () => {
  let component: GeneratesalaryformonthComponent;
  let fixture: ComponentFixture<GeneratesalaryformonthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneratesalaryformonthComponent]
    });
    fixture = TestBed.createComponent(GeneratesalaryformonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
