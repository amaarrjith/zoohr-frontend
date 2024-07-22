import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyleaveeditComponent } from './monthlyleaveedit.component';

describe('MonthlyleaveeditComponent', () => {
  let component: MonthlyleaveeditComponent;
  let fixture: ComponentFixture<MonthlyleaveeditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonthlyleaveeditComponent]
    });
    fixture = TestBed.createComponent(MonthlyleaveeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
