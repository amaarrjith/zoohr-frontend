import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbonusComponent } from './viewbonus.component';

describe('ViewbonusComponent', () => {
  let component: ViewbonusComponent;
  let fixture: ComponentFixture<ViewbonusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewbonusComponent]
    });
    fixture = TestBed.createComponent(ViewbonusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
