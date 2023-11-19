import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgSubSigninComponent } from './org-sub-signin.component';

describe('OrgSubSigninComponent', () => {
  let component: OrgSubSigninComponent;
  let fixture: ComponentFixture<OrgSubSigninComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrgSubSigninComponent]
    });
    fixture = TestBed.createComponent(OrgSubSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
