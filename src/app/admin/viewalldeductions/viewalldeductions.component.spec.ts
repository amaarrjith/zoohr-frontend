import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewalldeductionsComponent } from './viewalldeductions.component';

describe('ViewalldeductionsComponent', () => {
  let component: ViewalldeductionsComponent;
  let fixture: ComponentFixture<ViewalldeductionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewalldeductionsComponent]
    });
    fixture = TestBed.createComponent(ViewalldeductionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
