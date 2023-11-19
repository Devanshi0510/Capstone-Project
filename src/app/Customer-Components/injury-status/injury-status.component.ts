import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ICustomer } from 'src/app/Model/ICustomer';
import { SCustomerService } from 'src/app/Services/scustomer.service';

@Component({
  selector: 'app-injury-status',
  templateUrl: './injury-status.component.html',
  styleUrls: ['./injury-status.component.scss']
})
export class InjuryStatusComponent implements OnInit{
  currentStatus:any;
data: any;
help: any;

ngOnInit(){
    this.http.get<ICustomer>("https://localhost:7043/api/Customer/6554949c56e4f3e18a545ec1").subscribe((res)=>
    {
      this.data=res.injuries.status
      console.log(this.data)
      this.help=res.injuries.help
      console.log(this.help)
    })
  }

  UpdateStatus() {
    let selectedStatus =( document.getElementById("status-dropdown")as HTMLSelectElement).value;
    console.log(selectedStatus)
    this.custService.UpdateStatus(selectedStatus)
    this.ngOnInit()
  //   
  }

  DurationStatus(){
    this.http.get<ICustomer>("https://localhost:7043/api/Customer/6554949c56e4f3e18a545ec1").subscribe((res)=>
    {
      const injuryDate = new Date(res.injuries.injuryDate); // convert to Date object
  const today = new Date(); // today's date
  const millisecondsPerDay = 24 * 60 * 60 * 1000; // number of milliseconds in a day
  const daysSinceInjury = Math.floor((today.getTime() - injuryDate.getTime()) / millisecondsPerDay);
  if (daysSinceInjury >= 2) {
    alert("It has been " + daysSinceInjury + " days since the injury occurred, which is more than or equal to 2 days.");
  }
    })
  }
constructor(private custService: SCustomerService, private http: HttpClient){

}

}
