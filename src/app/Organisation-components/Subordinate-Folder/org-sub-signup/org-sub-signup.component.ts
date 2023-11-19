import { GoogleLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SadminService } from 'src/app/Services/sadmin.service';
import { SorganisationService } from 'src/app/Services/sorganisation.service';
import { SsubordinateService } from 'src/app/Services/ssubordinate.service';

@Component({
  selector: 'app-org-sub-signup',
  templateUrl: './org-sub-signup.component.html',
  styleUrls: ['./org-sub-signup.component.scss']
})
export class OrgSubSignupComponent {


  signUp: FormGroup;

  user: SocialUser;
  loggedIn: boolean;

  
  constructor(private fb: FormBuilder, private authService: SocialAuthService, private organisationService: SorganisationService, private router: Router, private AdminService: SsubordinateService) {
    this.signUp = this.fb.group({
      name: ['', Validators.required],
      username: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confPassword: ['', Validators.required],
    }, { validators: this.passwordMatchValidator });
  }


  passwordMatchValidator(group: FormGroup) {
    const password = group.get('password')!.value;
    const confirmPassword = group.get('confPassword')!.value;
    if (password !== confirmPassword) {
      group.get('confPassword')!.setErrors({ mismatch: true });
    } else {
      group.get('confPassword')!.setErrors(null);
    }
    return null;
  }

  onSubmit() {
    if (this.signUp.valid) {
      this.AdminService.Addsubordinate(this.signUp);
      console.log(this.signUp);
    } else {
      alert('Please fix the errors in the form.');
    }
  }
}
