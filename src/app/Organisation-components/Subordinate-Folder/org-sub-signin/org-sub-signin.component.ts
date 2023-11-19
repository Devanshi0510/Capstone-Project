import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SadminService } from 'src/app/Services/sadmin.service';
import { SorganisationService } from 'src/app/Services/sorganisation.service';
import { SsubordinateService } from 'src/app/Services/ssubordinate.service';

@Component({
  selector: 'app-org-sub-signin',
  templateUrl: './org-sub-signin.component.html',
  styleUrls: ['./org-sub-signin.component.scss']
})
export class OrgSubSigninComponent {

  signUp: FormGroup;

  user: SocialUser;
  loggedIn: boolean;
Valid: any;

  
  constructor(private fb: FormBuilder, private authService: SocialAuthService, private organisationService: SorganisationService, private subService: SsubordinateService) {
    this.signUp = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }


  onSubmit() {
    if (this.signUp.valid) {
      console.log(this.signUp);
      this.subService.LogInsubordinate(this.signUp);
    } else {
      alert('Please fix the errors in the form.');
    }
  }


}
