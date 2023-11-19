import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgAdminSignupComponent } from './org-admin-signup.component';

describe('OrgAdminSignupComponent', () => {
  let component: OrgAdminSignupComponent;
  let fixture: ComponentFixture<OrgAdminSignupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrgAdminSignupComponent]
    });
    fixture = TestBed.createComponent(OrgAdminSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
