import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewotherdeductionComponent } from './viewotherdeduction.component';

describe('ViewotherdeductionComponent', () => {
  let component: ViewotherdeductionComponent;
  let fixture: ComponentFixture<ViewotherdeductionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewotherdeductionComponent]
    });
    fixture = TestBed.createComponent(ViewotherdeductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
