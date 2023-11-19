import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonPageComponent } from './common-page/common-page.component';
import { OrgRegisterComponent } from './Organisation-components/org-register/org-register.component';
import { OrgSignInComponent } from './Organisation-components/org-sign-in/org-sign-in.component';
import { CustSignInComponent } from './Customer-Components/cust-sign-in/cust-sign-in.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from '@abacritt/angularx-social-login';
import { GoogleSignUpComponent } from './google-sign-up/google-sign-up.component';
import {  GoogleSigninButtonModule } from '@abacritt/angularx-social-login';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { OrgDashboardComponent } from './Organisation-components/org-dashboard/org-dashboard.component';
import { OrgCardsComponent } from './Organisation-components/org-cards/org-cards.component';
import { OrgFooterComponent } from './Organisation-components/org-footer/org-footer.component';
import { OrgAdminSignupComponent } from './Organisation-components/Admin-Folder/org-admin-signup/org-admin-signup.component';
import { OrgAdminSigninComponent } from './Organisation-components/Admin-Folder/org-admin-signin/org-admin-signin.component';
import { AdminComponent } from './Organisation-components/admin/admin.component';
import { AdminPortalComponent } from './Organisation-components/Admin-Folder/admin-portal/admin-portal.component';
import { OrgAdminDashboardComponent } from './Organisation-components/Admin-Folder/org-admin-dashboard/org-admin-dashboard.component';
import { SubordinatePortalComponent } from './Organisation-components/Subordinate-Folder/subordinate-portal/subordinate-portal.component';
import { OrgSubDashboardComponent } from './Organisation-components/Subordinate-Folder/org-sub-dashboard/org-sub-dashboard.component';
import { OrgSubSigninComponent } from './Organisation-components/Subordinate-Folder/org-sub-signin/org-sub-signin.component';
import { OrgSubSignupComponent } from './Organisation-components/Subordinate-Folder/org-sub-signup/org-sub-signup.component';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatCommonModule } from '@angular/material/core';
import { MatRowDef } from '@angular/material/table';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import {MatDatepickerInput, MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { DashboardSubComponent } from './Organisation-components/Subordinate-Folder/dashboard-sub/dashboard-sub.component';
import { SideBarComponent } from './Organisation-components/Subordinate-Folder/side-bar/side-bar.component';
import { TopBarComponent } from './Organisation-components/Subordinate-Folder/top-bar/top-bar.component';
import { AddCustComponent } from './Organisation-components/Subordinate-Folder/add-cust/add-cust.component';
import { EditCustComponent } from './Organisation-components/Subordinate-Folder/edit-cust/edit-cust.component';
import { DeleteCustComponent } from './Organisation-components/Subordinate-Folder/delete-cust/delete-cust.component';
import { CustDashboardComponent } from './Customer-Components/cust-dashboard/cust-dashboard.component';
import { CustDashComponent } from './Customer-Components/cust-dash/cust-dash.component';
import { CustHeaderComponent } from './Customer-Components/cust-header/cust-header.component';
import { InjuryReportComponent } from './Customer-Components/injury-report/injury-report.component';
import { InjuryStatusComponent } from './Customer-Components/injury-status/injury-status.component';
import { AccountComponent } from './Customer-Components/account/account.component';
import { RideDetailsComponent } from './Customer-Components/ride-details/ride-details.component';
import { HelpCustComponent } from './Customer-Components/help-cust/help-cust.component';
import { DashboardAdminComponent } from './Organisation-components/Admin-Folder/dashboard-admin/dashboard-admin.component';
import { AdminSideBarComponent } from './Organisation-components/Admin-Folder/admin-side-bar/admin-side-bar.component';
import { AdminTopBarComponent } from './Organisation-components/Admin-Folder/admin-top-bar/admin-top-bar.component';
import { EmailJSResponseStatus } from '@emailjs/browser';
import { AdminInjStatusComponent } from './Organisation-components/Admin-Folder/admin-inj-status/admin-inj-status.component';
import { CustInjuryStatComponent } from './Organisation-components/Admin-Folder/cust-injury-stat/cust-injury-stat.component';


@NgModule({
  declarations: [
    AppComponent,
    CommonPageComponent,
    OrgRegisterComponent,
    OrgSignInComponent,
    CustSignInComponent,
    GoogleSignUpComponent,
    OrgDashboardComponent,
    OrgCardsComponent,
    OrgFooterComponent,
    OrgAdminSignupComponent,
    OrgAdminSigninComponent,
    AdminComponent,
    AdminPortalComponent,
    OrgAdminDashboardComponent,
    SubordinatePortalComponent,
    OrgSubDashboardComponent,
    OrgSubSigninComponent,
    OrgSubSignupComponent,
    DashboardSubComponent,
    SideBarComponent,
    TopBarComponent,
    AddCustComponent,
    EditCustComponent,
    DeleteCustComponent,
    CustDashboardComponent,
    CustDashComponent,
    CustHeaderComponent,
    InjuryReportComponent,
    InjuryStatusComponent,
    AccountComponent,
    RideDetailsComponent,
    HelpCustComponent,
    DashboardAdminComponent,
    AdminSideBarComponent,
    AdminTopBarComponent,
    AdminInjStatusComponent,
    CustInjuryStatComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    SocialLoginModule,
    GoogleSigninButtonModule,
    HttpClientModule,
    MatPaginatorModule,
    MatTableModule,
    MatCommonModule,
    MatOptionModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressSpinnerModule
  
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '966538445254-nlomadbp3odbl79l31ihk0aetaikg486.apps.googleusercontent.com'
            )
          }
          // },
          // {
          //   id: FacebookLoginProvider.PROVIDER_ID,
          //   provider: new FacebookLoginProvider('clientId')
          // }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
