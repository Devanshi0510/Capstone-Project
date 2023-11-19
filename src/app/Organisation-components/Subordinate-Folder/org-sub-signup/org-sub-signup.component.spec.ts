import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgSubSignupComponent } from './org-sub-signup.component';

describe('OrgSubSignupComponent', () => {
  let component: OrgSubSignupComponent;
  let fixture: ComponentFixture<OrgSubSignupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrgSubSignupComponent]
    });
    fixture = TestBed.createComponent(OrgSubSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
