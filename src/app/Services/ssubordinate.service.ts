import { Injectable } from '@angular/core';
import { Iorganisation } from '../Model/IOrganisation';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SorganisationService } from './sorganisation.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SsubordinateService {

  allOrganisation$ = new BehaviorSubject<Iorganisation[]>([]);
  constructor(private http: HttpClient, private router: Router, private sorgService: SorganisationService) {

    this.http.get("https://localhost:7043/api/Organisations").subscribe((res) => {
      console.log('data', res);
      this.allOrganisation$.next(res as any);
    })
  }


  Addsubordinate(user) {
    // const allOrganisations = this.allOrganisation$.getValue();
 console.log("123")
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
    this.http.get<Iorganisation>(`https://localhost:7043/api/Organisations/${id}`).subscribe((res) => {

      console.log(res)
      if (!res.subOrdinate[0]) { 
        res.subOrdinate[0] = PostData;
        console.log(res.subOrdinate);
        this.http.put(`https://localhost:7043/api/Organisations/${id}`, res).subscribe((result) => {
          console.log(result);
          this.router.navigate(['subordinate-portal/dashboard-sub']);
        });
      } else { 
    
          if (res.subOrdinate[0].email === user.value.email) {
            alert('User is already an subordinate');
            this.router.navigate(['subordinate-portal/dashboard-sub']);
          }
        
        else{ 
          alert('subordinate already present for  this organization');
        }
      }
    });
  }


  LogInsubordinate(user)
  {
    console.log(user)
    const id = this.sorgService.getId();
    console.log(id);
    this.http.get<Iorganisation>(`https://localhost:7043/api/Organisations/${id}`).subscribe((res) => {
      if (!res.subOrdinate[0]) { 
      alert("No such subordinate Present")
      } else { 

          if (res.subOrdinate[0].email === user.value.email && res.subOrdinate[0].password === user.value.password) {
          
            this.router.navigate(['subordinate-portal/dashboard-sub']);
          }
        
        else{ 
          alert('Invalid Details');
        }
      }
    });
  }
}
