import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgSignInComponent } from './org-sign-in.component';

describe('OrgSignInComponent', () => {
  let component: OrgSignInComponent;
  let fixture: ComponentFixture<OrgSignInComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrgSignInComponent]
    });
    fixture = TestBed.createComponent(OrgSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
