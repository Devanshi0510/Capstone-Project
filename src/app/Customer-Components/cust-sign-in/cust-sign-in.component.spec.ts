import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustSignInComponent } from './cust-sign-in.component';

describe('CustSignInComponent', () => {
  let component: CustSignInComponent;
  let fixture: ComponentFixture<CustSignInComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustSignInComponent]
    });
    fixture = TestBed.createComponent(CustSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
