import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustDashComponent } from './cust-dash.component';

describe('CustDashComponent', () => {
  let component: CustDashComponent;
  let fixture: ComponentFixture<CustDashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustDashComponent]
    });
    fixture = TestBed.createComponent(CustDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
