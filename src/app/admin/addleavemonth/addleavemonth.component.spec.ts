import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddleavemonthComponent } from './addleavemonth.component';

describe('AddleavemonthComponent', () => {
  let component: AddleavemonthComponent;
  let fixture: ComponentFixture<AddleavemonthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddleavemonthComponent]
    });
    fixture = TestBed.createComponent(AddleavemonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
