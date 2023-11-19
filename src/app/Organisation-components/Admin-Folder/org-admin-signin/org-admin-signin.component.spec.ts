import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgAdminSigninComponent } from './org-admin-signin.component';

describe('OrgAdminSigninComponent', () => {
  let component: OrgAdminSigninComponent;
  let fixture: ComponentFixture<OrgAdminSigninComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrgAdminSigninComponent]
    });
    fixture = TestBed.createComponent(OrgAdminSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
