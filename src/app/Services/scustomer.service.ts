import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
// import { ICustomer } from '../Model/ICustomer';
import { BehaviorSubject, Observable } from 'rxjs';
import { SorganisationService } from './sorganisation.service';
import { ICustomer } from '../Model/ICustomer';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class SCustomerService {
  businessid$ = new BehaviorSubject<String>("");
  allOrganisation$ = new BehaviorSubject<ICustomer[]>([]);
  
  
  searchText = new BehaviorSubject<string>('');
  allCust$ = new BehaviorSubject<ICustomer[]>([]);
  allCust: ICustomer[] = [];
  custId$ =new BehaviorSubject<string>('');
  private url = 'https://localhost:7043/api/Customer';
  id: String;
  constructor(private http: HttpClient, private orgService: SorganisationService, private router: Router) { 

    this.http.get("https://localhost:7043/api/Organisations").subscribe((res) => {
      console.log('data', res);
      this.allOrganisation$.next(res as any);
    })


  }

  getPosts() {
    const id=this.orgService.getId()
    return this.http.get(`https://localhost:7043/${id}`);
  }

  getCustId(){
    return localStorage.getItem("CustId")
  }
 

  
  setSearchText(text: string) {
    // console.log(text);
    this.searchText.next(text);
  }

  getSearchText() {
    return this.searchText.asObservable();
  }

  // getAllCustomer(){
  //   return this.http.get('https://localhost:7043/api/Customer');
  // }
  AddCustomerDetail(user: FormGroup) {
    this.id = this.orgService.getId();
    // console.log(this.id)
    console.log(this.id)
    const PostData = {
      name: user.value.name,
      email: user.value.email,
      phone: user.value.phone,
      businessId: this.id,
    };
    console.log(PostData);
    this.http
      .post(
        'https://localhost:7043/api/Customer',
        PostData
      )
      .subscribe((res) => {
        console.log(res);
      });
  }

  EditCustomerDetail(user: FormGroup) {
    this.http.get<ICustomer[]>('https://localhost:7043/api/Customer').subscribe((res) => {
      this.allCust = res;
      this.allCust$.next(res);
      const cust = this.allCust.find((s) => s.email === user.value.email);
      if (!cust) {
        throw new Error(`Student with email ${user.value.email} not found`);
      }

      const PostData = {
        id: cust.id,
        name: user.value.name,
        email: user.value.email,
        phone: user.value.phone,
        businessId: this.orgService.getId()

      };
      const url = `https://localhost:7043/api/Customer/${cust.id}`;
      console.log(url);
      this.http.put<ICustomer>(url, PostData).subscribe((updatedcust) => {
        const index = this.allCust.indexOf(cust);
        this.allCust.splice(index, 1, updatedcust);
        // this.dataSource.data = this.allCust;
      });

    })
  }


  DeleteCustomerDetail(user: FormGroup) {
    this.http.get<ICustomer[]>('https://localhost:7043/api/Customer').subscribe((res) => {
      this.allCust = res;
      this.allCust$.next(res);
      const cust = this.allCust.find((s) => s.email === user.value.email);
      const url = `https://localhost:7043/api/Customer/${cust.id}`;
      console.log(url);
      this.http.delete<ICustomer>(url).subscribe((res) => {
        console.log(res);
      });
    })

  }








  LogInCustomer(user) {
    console.log(user.value);
    console.log(user);

    this.http.get<ICustomer[]>('https://localhost:7043/api/Customer').subscribe((res) => {
      // this.allCust=res;
      this.allCust$.next(res);
      const allOrganisations = this.allCust$.getValue();
      console.log(allOrganisations)
      if (allOrganisations.some(organisation => organisation.email === user.value.email)) {
        const existingOrg = allOrganisations.find(organisation => organisation.email === user.value.email);
        this.custId$.next(existingOrg.id);
        localStorage.setItem("CustId", existingOrg.id);
        console.log(this.custId$.value);
        this.router.navigate(['/cust-dash']);
      }
    })

  }

  AddInjuryReport(user: FormGroup,latitude:number,longitude:number)
  {
    // console.log(this.custId$)
    // console.log(this.custId$.value)
    const custId= this.getCustId()
    console.log(custId)
    this.http.get<ICustomer>(`https://localhost:7043/api/Customer/${custId}`).subscribe((res) => {
         console.log(res)
         const PostData = {
          injuryDate: user.value.injuryDate,
          time: user.value.time,
          location: user.value.location,
          description: user.value.instructions,
          severity: user.value.severity,
          status: "Pending",
          latitude:latitude,
          longitude:longitude,
          help:"Needed"
        };
        const data= res;
        console.log(data)
        data.injuries=PostData;
        console.log(custId)
        this.http
          .put(
            `https://localhost:7043/api/Customer/${custId}`,
            data
          )
          .subscribe((res) => {
            console.log("heyyy")
            console.log(res);
          });
  })
}

UpdateStatus(newStatus:any){

  const custId= this.getCustId()

  this.http.get<ICustomer>(`https://localhost:7043/api/Customer/${custId}`).subscribe((res) => {
    console.log(res)
   const data= res;
   console.log(data)
   data.injuries.status=newStatus;
if(newStatus=='Pending') data.injuries.help="Needed"
if(newStatus=='Completed') data.injuries.help="Reached"
if(newStatus=='Cancelled') data.injuries.help="None"
   this.http
     .put(
      `https://localhost:7043/api/Customer/${custId}`,
       data
     )
     .subscribe((res) => {
       console.log(res);
     });
})
}




latitude:number;
longitude: number;
StoreLocation(id:string,latitude:number,longitude:number){
  console.log("2")
  this.latitude=latitude;
  this.longitude=longitude;
  this.router.navigate[(`/admin-portal/dashboard-admin/admin-inj-status/map-integration/${id}`)]
}

GiveLocation(){
console.log("3")
  location: [this.latitude,this.longitude];
  console.log(location)
  return location;
}

}
