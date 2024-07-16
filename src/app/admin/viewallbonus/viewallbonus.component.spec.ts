import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallbonusComponent } from './viewallbonus.component';

describe('ViewallbonusComponent', () => {
  let component: ViewallbonusComponent;
  let fixture: ComponentFixture<ViewallbonusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewallbonusComponent]
    });
    fixture = TestBed.createComponent(ViewallbonusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
