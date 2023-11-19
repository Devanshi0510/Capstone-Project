import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SadminService } from 'src/app/Services/sadmin.service';
import { SorganisationService } from 'src/app/Services/sorganisation.service';

@Component({
  selector: 'app-org-admin-signin',
  templateUrl: './org-admin-signin.component.html',
  styleUrls: ['./org-admin-signin.component.scss']
})
export class OrgAdminSigninComponent {

  signUp: FormGroup;

  user: SocialUser;
  loggedIn: boolean;
Valid: any;

  
  constructor(private fb: FormBuilder, private authService: SocialAuthService, private organisationService: SorganisationService, private adminService: SadminService) {
    this.signUp = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  // ngOnInit() {
  //   this.authService.authState.subscribe((user) => {
  //     this.user = user;
  //     this.loggedIn = (user != null);
  //     console.log(this.loggedIn);
  //     // console.log(this.user);
  //     this.adminService.AddAdminGoogle(this.user);
    
  //   });
  // }


  onSubmit() {
    if (this.signUp.valid) {
      console.log(this.signUp);
      this.adminService.LogInAdmin(this.signUp);
    } else {
      alert('Please fix the errors in the form.');
    }
  }

}
