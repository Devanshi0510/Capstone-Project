import { Component, Directive, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
// import ValidateForm from '../../helpers/validationform';
import { Router } from '@angular/router';
// import { AuthService } from './../../services/auth.service';
import { SocialAuthService, SocialUser } from "@abacritt/angularx-social-login";
import { SorganisationService } from '../../Services/sorganisation.service';

@Component({
  selector: 'app-org-sign-in',
  templateUrl: './org-sign-in.component.html',
  styleUrls: ['./org-sign-in.component.scss']
})
export class OrgSignInComponent {
  signUp: FormGroup;

  user: SocialUser;
  loggedIn: boolean;
Valid: any;

  
  constructor(private fb: FormBuilder, private authService: SocialAuthService, private organisationService: SorganisationService) {
    this.signUp = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.loggedIn);
      // console.log(this.user);
      this.organisationService.AddOrganisationGoogle(this.user);
    
    });
  }


  onSubmit() {
    if (this.signUp.valid) {
      console.log(this.signUp);
      this.organisationService.LogInOrganisation(this.signUp);
    } else {
      alert('Please fix the errors in the form.');
    }
  }
}
