import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Iorganisation } from '../Model/IOrganisation';
import { Router } from '@angular/router';
import { SorganisationService } from './sorganisation.service';
import { ICustomer } from '../Model/ICustomer';
@Injectable({
  providedIn: 'root'
})
export class SadminService {

  // busId$ = new BehaviorSubject<String>("");
  allOrganisation$ = new BehaviorSubject<Iorganisation[]>([]);
  constructor(private http: HttpClient, private router: Router, private sorgService: SorganisationService) {

    this.http.get<Iorganisation>("https://localhost:7043/api/Organisations").subscribe((res) => {
      console.log('data', res);
      this.allOrganisation$.next(res as any);
    })
  }


  AddAdmin(user) {
    // const allOrganisations = this.allOrganisation$.getValue();

    console.log(user)
    const PostData = {
      name: user.value.name,
      email: user.value.email,
      phone: user.value.phone,
      password: user.value.password,
      username: user.value.username,
    };
    const id = this.sorgService.getId();
    console.log(id);
   this.getOrganisationByid(id).subscribe((res) => {
      if (!res.admin[0]) { 
        res.admin[0] = PostData;
        console.log(res.admin);
        const id=this.sorgService.getId()
        this.http.put(`https://localhost:7043/api/Organisations/${id}`, res).subscribe((result) => {
          console.log(result);
        });
      } else { 
        let existingAdmin = false;
  
          if (res.admin[0].email === user.value.email) {
           
            existingAdmin = true;
            this.router.navigate(['/admin-portal/dashboard-admin']);
          }
      }
    });
  }


  LogInAdmin(user)
  {
    console.log(user)
    const id = this.sorgService.getId();
    console.log(id);
   this.getOrganisationByid(id).subscribe((res) => {
      if (!res.admin[0]) { 
      alert("No such admin Present")
      } else { 

          if (res.admin[0].email === user.value.email && res.admin[0].password === user.value.password) {
            this.router.navigate(['/admin-portal/dashboard-admin']);
          }
        
        else{ 
          alert('Invalid Details');
        }
      }
    });
  }

  getOrganisationByid(id:any){
    return this.http.get<Iorganisation>(`https://localhost:7043/api/Organisations/${id}`)
  }

  getCustomerByid(id:any){
    return this.http.get<ICustomer>(`https://localhost:7043/api/Customer/${id}`)
  }



  }
