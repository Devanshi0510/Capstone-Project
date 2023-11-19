import { Component, Directive, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
// import ValidateForm from '../../helpers/validationform';
import { Router } from '@angular/router';
// import { AuthService } from './../../services/auth.service';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from "@abacritt/angularx-social-login";
import { SorganisationService } from '../../Services/sorganisation.service';


@Component({
  selector: 'app-org-register',
  templateUrl: './org-register.component.html',
  styleUrls: ['./org-register.component.scss'],

})
export class OrgRegisterComponent{
  signUp: FormGroup;

  user: SocialUser;
  loggedIn: boolean;

  
  constructor(private fb: FormBuilder, private authService: SocialAuthService, private organisationService: SorganisationService, private router: Router) {
    this.signUp = this.fb.group({
      name: ['', Validators.required],
      username: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confPassword: ['', Validators.required],
    }, { validators: this.passwordMatchValidator });
  }

  ngOnInit() {
    const userSub = this.authService.authState.subscribe((user) => {
      this.user = user;
      // console.error(this.user);
      this.loggedIn = (user != null);
      console.log(this.loggedIn);
      this.organisationService.AddOrganisationGoogle(this.user);
   });

   

   
  }

  googleSignUp()
  {
   
    console.log(this.user)
  
  //  console.log(userSub)
      
  }


  loginWithGoogle(): void {
    console.log("inside login new")
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
      .then(() => this.router.navigate(['org-register']));
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
      this.organisationService.AddOrganisation(this.signUp);
      console.log(this.signUp);
    } else {
      alert('Please fix the errors in the form.');
    }
  }
}