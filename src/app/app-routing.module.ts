import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonPageComponent } from './common-page/common-page.component';
import { OrgRegisterComponent } from './Organisation-components/org-register/org-register.component';
import { OrgSignInComponent } from './Organisation-components/org-sign-in/org-sign-in.component';
import { CustSignInComponent } from './Customer-Components/cust-sign-in/cust-sign-in.component';
import { GoogleSignUpComponent } from './google-sign-up/google-sign-up.component';
import { OrgDashboardComponent } from './Organisation-components/org-dashboard/org-dashboard.component';
import { OrgAdminSignupComponent } from './Organisation-components/Admin-Folder/org-admin-signup/org-admin-signup.component';
import { OrgAdminSigninComponent } from './Organisation-components/Admin-Folder/org-admin-signin/org-admin-signin.component';
import { AdminPortalComponent } from './Organisation-components/Admin-Folder/admin-portal/admin-portal.component';
import { OrgCardsComponent } from './Organisation-components/org-cards/org-cards.component';
import { OrgAdminDashboardComponent } from './Organisation-components/Admin-Folder/org-admin-dashboard/org-admin-dashboard.component';
import { SubordinatePortalComponent } from './Organisation-components/Subordinate-Folder/subordinate-portal/subordinate-portal.component';
import { OrgSubSignupComponent } from './Organisation-components/Subordinate-Folder/org-sub-signup/org-sub-signup.component';
import { OrgSubSigninComponent } from './Organisation-components/Subordinate-Folder/org-sub-signin/org-sub-signin.component';
import { OrgSubDashboardComponent } from './Organisation-components/Subordinate-Folder/org-sub-dashboard/org-sub-dashboard.component';
import { DashboardSubComponent } from './Organisation-components/Subordinate-Folder/dashboard-sub/dashboard-sub.component';
import { AddCustComponent } from './Organisation-components/Subordinate-Folder/add-cust/add-cust.component';
import { EditCustComponent } from './Organisation-components/Subordinate-Folder/edit-cust/edit-cust.component';
import { DeleteCustComponent } from './Organisation-components/Subordinate-Folder/delete-cust/delete-cust.component';
import { CustDashComponent } from './Customer-Components/cust-dash/cust-dash.component';
import { CustDashboardComponent } from './Customer-Components/cust-dashboard/cust-dashboard.component';
import { InjuryReportComponent } from './Customer-Components/injury-report/injury-report.component';
import { InjuryStatusComponent } from './Customer-Components/injury-status/injury-status.component';
import { RideDetailsComponent } from './Customer-Components/ride-details/ride-details.component';
import { DashboardAdminComponent } from './Organisation-components/Admin-Folder/dashboard-admin/dashboard-admin.component';
import { AdminInjStatusComponent } from './Organisation-components/Admin-Folder/admin-inj-status/admin-inj-status.component';
import { CustInjuryStatComponent } from './Organisation-components/Admin-Folder/cust-injury-stat/cust-injury-stat.component';


const routes: Routes = [  
  {
    path:"",
    component: CommonPageComponent
  },
  {
    path:"org-register",
    component: OrgRegisterComponent
    
  },
  {
    path:"org-sign-in",
    component: OrgSignInComponent
  },
  {
    path:"cust-sign-in",
    component: CustSignInComponent
  }
  // ,
  // {
  //   path:"org-register/google-sign-up",
  //   component: GoogleSignUpComponent
  // },
  ,
  {
    path:"org-dashboard",
    component: OrgDashboardComponent
    
  }
  
    ,
  
{
  path:"subordinate-portal",
  component: SubordinatePortalComponent,
  children:[
    {
  path:"",
  component: OrgSubSignupComponent,
    },
  {
    path:"sub-sigin",
    component:OrgSubSigninComponent
  },
  {
     path:"dashboard-sub",
     component: DashboardSubComponent,
     children:[
      {
          path:"",
          component: OrgSubDashboardComponent,
      },
      {
        path:"add-cust",
          component: AddCustComponent,
      }
      ,{
        path:"edit-cust",
          component: EditCustComponent,
      }
      ,{
        path:"delete-cust",
          component: DeleteCustComponent,
      }
     ]
  }
]}
,
{
  path:"cust-sign-in",
  component: CustSignInComponent,

}
,
{
  path:"cust-dash",
  component: CustDashComponent,
  children:[
    {
      path:"",
      component: CustDashboardComponent,
  },
  {
    path:"injury-report",
    component: InjuryReportComponent,
},
{
  path:"injury-status",
  component: InjuryStatusComponent,
},

{
  path:"ride-details",
  component: RideDetailsComponent,
}]
},
{
  path:"admin-portal",
  component: AdminPortalComponent,
  children:[
    {
  path:"",
  component:OrgAdminSignupComponent
    },
  {
    path:"org-admin-signin",
    component:OrgAdminSigninComponent
  },
  {
     path:"dashboard-admin",
     component: DashboardAdminComponent,

     children:[
      {
          path:"",
          component: OrgAdminDashboardComponent,
      },
      {
        path:"admin-inj-status",
        component: AdminInjStatusComponent,
        children:[
          {
               path:":id",
               component: CustInjuryStatComponent,
          }
                 
        ]
    }
     ]
  }
]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 
}
