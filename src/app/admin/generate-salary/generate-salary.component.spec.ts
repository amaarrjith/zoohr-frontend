import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateSalaryComponent } from './generate-salary.component';

describe('GenerateSalaryComponent', () => {
  let component: GenerateSalaryComponent;
  let fixture: ComponentFixture<GenerateSalaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenerateSalaryComponent]
    });
    fixture = TestBed.createComponent(GenerateSalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
