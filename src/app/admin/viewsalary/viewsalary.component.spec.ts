import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsalaryComponent } from './viewsalary.component';

describe('ViewsalaryComponent', () => {
  let component: ViewsalaryComponent;
  let fixture: ComponentFixture<ViewsalaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewsalaryComponent]
    });
    fixture = TestBed.createComponent(ViewsalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
