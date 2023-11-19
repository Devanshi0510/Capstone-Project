import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Iorganisation } from '../Model/IOrganisation';
import { Router } from '@angular/router';
import { SocialUser } from '@abacritt/angularx-social-login';

@Injectable({
  providedIn: 'root'
})
export class SorganisationService {

  businessid$ = new BehaviorSubject<String>("");
  allOrganisation$ = new BehaviorSubject<Iorganisation[]>([]);
  constructor(private http: HttpClient, private router: Router) {

    this.http.get("https://localhost:7043/api/Organisations").subscribe((res) => {
      console.log('data', res);
      this.allOrganisation$.next(res as any);
    })
  }


  AddOrganisation(user) {
    const allOrganisations = this.allOrganisation$.getValue();
    if (allOrganisations.some(organisation => organisation.email === user.value.email)) {
      alert('User already present');
    } else {
      this.http.post("https://localhost:7043/api/Organisations", user.value).subscribe((res) => {
        console.log(res);
        allOrganisations.push(res as Iorganisation);
        this.allOrganisation$.next(allOrganisations);
        alert('User Successfully Registered. Login to continue');
      });
    }
  }

  AddOrganisationGoogle(user) {
    // console.log(user)
    const PostData = { name: user.name, email: user.email, idToken: user.idToken };
    // console.log(PostData);

    const allOrganisations = this.allOrganisation$.getValue();
    console.log(this.allOrganisation$.value);
    if (allOrganisations.some(organisation => 
      organisation.email === PostData.email)) {
        const existingOrg = allOrganisations.find(organisation => organisation.email === PostData.email);
        // this.businessid$.next(existingOrg.id); 
        this.SaveBusinessId(existingOrg.id);
      console.log(this.businessid$.value);


      this.router.navigate(['/org-dashboard']);
    } else {
      this.http.post("https://localhost:7043/api/Organisations", PostData).subscribe((res) => {
        // console.log(res);
        allOrganisations.push(res as Iorganisation);
        this.allOrganisation$.next(allOrganisations);
        alert('User Successfully Registered. Login to continue');
      });
    }

  }

  LogInOrganisation(user) {
    console.log(user.value);
    console.log(user);

    const allOrganisations = this.allOrganisation$.getValue();
    if (allOrganisations.some(organisation => organisation.email === user.value.email && organisation.password === user.value.password)) {
      const existingOrg = allOrganisations.find(organisation => organisation.email === user.value.email);
        // this.businessid$.next(existingOrg.id); 
        this.SaveBusinessId(existingOrg.id);
      console.log(this.businessid$.value);
      this.router.navigate(['/org-dashboard']);
    }
    else if (allOrganisations.some(organisation => organisation.email === user.value.email && organisation.password !== user.value.password)) {
      alert("Wrong Password");
    }
    else {
      alert('User not Registered. Sign In');
    }
  }



  getId(){
    // const id="6551b8e7780b99ef19550e4f"
    return localStorage.getItem("business_id")

  }

  SaveBusinessId(id:string)
{
  localStorage.setItem("business_id", id);
}

  

  }



