import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestleaveviewComponent } from './guestleaveview.component';

describe('GuestleaveviewComponent', () => {
  let component: GuestleaveviewComponent;
  let fixture: ComponentFixture<GuestleaveviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuestleaveviewComponent]
    });
    fixture = TestBed.createComponent(GuestleaveviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
