import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdeductionComponent } from './viewdeduction.component';

describe('ViewdeductionComponent', () => {
  let component: ViewdeductionComponent;
  let fixture: ComponentFixture<ViewdeductionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewdeductionComponent]
    });
    fixture = TestBed.createComponent(ViewdeductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
