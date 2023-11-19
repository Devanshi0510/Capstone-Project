import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustInjuryStatComponent } from './cust-injury-stat.component';

describe('CustInjuryStatComponent', () => {
  let component: CustInjuryStatComponent;
  let fixture: ComponentFixture<CustInjuryStatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustInjuryStatComponent]
    });
    fixture = TestBed.createComponent(CustInjuryStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
