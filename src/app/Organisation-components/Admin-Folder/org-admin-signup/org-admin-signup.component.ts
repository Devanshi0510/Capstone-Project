import { GoogleLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SadminService } from 'src/app/Services/sadmin.service';
import { SorganisationService } from 'src/app/Services/sorganisation.service';

@Component({
  selector: 'app-org-admin-signup',
  templateUrl: './org-admin-signup.component.html',
  styleUrls: ['./org-admin-signup.component.scss']
})
export class OrgAdminSignupComponent {
  signUp: FormGroup;

  user: SocialUser;
  loggedIn: boolean;

  
  constructor(private fb: FormBuilder, private authService: SocialAuthService, private organisationService: SorganisationService, private router: Router, private AdminService: SadminService) {
    this.signUp = this.fb.group({
      name: ['', Validators.required],
      username: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confPassword: ['', Validators.required],
    }, { validators: this.passwordMatchValidator });
  }

  // ngOnInit() {
  //   const userSub = this.authService.authState.subscribe((user) => {
  //     this.user = user;
  //     // console.error(this.user);
  //     this.loggedIn = (user != null);
  //     console.log(this.loggedIn);
  //     this.AdminService.AddAdminGoogle(this.user);
  //  });

   

   


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
      this.AdminService.AddAdmin(this.signUp);
      console.log(this.signUp);
    } else {
      alert('Please fix the errors in the form.');
    }
  }
}
