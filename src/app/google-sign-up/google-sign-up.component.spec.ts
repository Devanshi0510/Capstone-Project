import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleSignUpComponent } from './google-sign-up.component';

describe('GoogleSignUpComponent', () => {
  let component: GoogleSignUpComponent;
  let fixture: ComponentFixture<GoogleSignUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GoogleSignUpComponent]
    });
    fixture = TestBed.createComponent(GoogleSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
