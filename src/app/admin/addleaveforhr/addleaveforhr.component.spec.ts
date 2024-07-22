import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddleaveforhrComponent } from './addleaveforhr.component';

describe('AddleaveforhrComponent', () => {
  let component: AddleaveforhrComponent;
  let fixture: ComponentFixture<AddleaveforhrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddleaveforhrComponent]
    });
    fixture = TestBed.createComponent(AddleaveforhrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
