import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallotherdeductionsComponent } from './viewallotherdeductions.component';

describe('ViewallotherdeductionsComponent', () => {
  let component: ViewallotherdeductionsComponent;
  let fixture: ComponentFixture<ViewallotherdeductionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewallotherdeductionsComponent]
    });
    fixture = TestBed.createComponent(ViewallotherdeductionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
