import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllleaveeditComponent } from './allleaveedit.component';

describe('AllleaveeditComponent', () => {
  let component: AllleaveeditComponent;
  let fixture: ComponentFixture<AllleaveeditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllleaveeditComponent]
    });
    fixture = TestBed.createComponent(AllleaveeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
