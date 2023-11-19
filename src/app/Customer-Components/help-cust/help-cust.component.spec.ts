import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpCustComponent } from './help-cust.component';

describe('HelpCustComponent', () => {
  let component: HelpCustComponent;
  let fixture: ComponentFixture<HelpCustComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HelpCustComponent]
    });
    fixture = TestBed.createComponent(HelpCustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
