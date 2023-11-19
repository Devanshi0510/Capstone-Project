import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SCustomerService } from 'src/app/Services/scustomer.service';

@Component({
  selector: 'app-cust-sign-in',
  templateUrl: './cust-sign-in.component.html',
  styleUrls: ['./cust-sign-in.component.scss']
})
export class CustSignInComponent {
  signUp: FormGroup;

  user: SocialUser;
  loggedIn: boolean;
Valid: any;

  
  constructor(private fb: FormBuilder, private authService: SocialAuthService, private organisationService: SCustomerService) {
    this.signUp = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.loggedIn);
      // console.log(this.user);
      // this.organisationService.AddCustomerGoogle(this.user);
    
    });
  }


  onSubmit() {
    if (this.signUp.valid) {
      console.log(this.signUp);
      this.organisationService.LogInCustomer(this.signUp);
    } else {
      alert('Please fix the errors in the form.');
    }
  }
}
