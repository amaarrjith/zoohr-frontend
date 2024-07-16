import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestsalaryviewComponent } from './guestsalaryview.component';

describe('GuestsalaryviewComponent', () => {
  let component: GuestsalaryviewComponent;
  let fixture: ComponentFixture<GuestsalaryviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuestsalaryviewComponent]
    });
    fixture = TestBed.createComponent(GuestsalaryviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
