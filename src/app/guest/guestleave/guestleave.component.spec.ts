import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestleaveComponent } from './guestleave.component';

describe('GuestleaveComponent', () => {
  let component: GuestleaveComponent;
  let fixture: ComponentFixture<GuestleaveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuestleaveComponent]
    });
    fixture = TestBed.createComponent(GuestleaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
