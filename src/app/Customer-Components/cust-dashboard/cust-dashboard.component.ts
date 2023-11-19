import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ICustomer } from 'src/app/Model/ICustomer';
import { SCustomerService } from 'src/app/Services/scustomer.service';
import * as emailjs from '@emailjs/browser';

@Component({
  selector: 'app-cust-dashboard',
  templateUrl: './cust-dashboard.component.html',
  styleUrls: ['./cust-dashboard.component.scss']
})
export class CustDashboardComponent implements OnInit{
  currentStatus:any;
data: any;
help: any;
custId: string;

ngOnInit(){
  this.custId=this.custService.getCustId()
    this.http.get<ICustomer>(`https://localhost:7043/api/Customer/${this.custId}`).subscribe((res)=>
    {
      this.data=res.injuries.status;
      this.help=res.injuries.help;
    })
  }
  UpdateStatus() {
    let selectedStatus =( document.getElementById("status-dropdown")as HTMLSelectElement).value;
    console.log(selectedStatus)
    this.custService.UpdateStatus(selectedStatus)
    this.ngOnInit()
  }

  DurationStatus(){
    this.http.get<ICustomer>(`https://localhost:7043/api/Customer/${this.custId}`).subscribe((res)=>
    {
      const injuryDate = new Date(res.injuries.injuryDate); // convert to Date object
  const today = new Date(); // today's date
  const millisecondsPerDay = 24 * 60 * 60 * 1000; // number of milliseconds in a day
  const daysSinceInjury = Math.floor((today.getTime() - injuryDate.getTime()) / millisecondsPerDay);
  if (res.injuries.status=="Pending" && daysSinceInjury >= 2) {
    alert("It has been " + daysSinceInjury + " days since the injury occurred, Your complain has been reported");
    const applicant = res.name
    this.sendInterviewRequestEmail(applicant)
  }
  else{
    alert("It has been " + daysSinceInjury + " days since the injury occurred");
  }
    })
  }
constructor(private custService: SCustomerService, private http: HttpClient){

}

sendInterviewRequestEmail(applicant: any) {
  // set up the email template parameters
  const templateParams = {
    to_email: "devanshipradeep0510@gmail.com",
    subject: 'Medical Emergency',
    message: 'Dear  Devanshi, we want  to inform you that our customer' + applicant+ 'has not recieved any medical health since 2 days. Please look into this matter as soon as posible.'
  };
 
  emailjs.send('service_mkjjpxt', 'template_p7lh53i', templateParams, '8d9YjeQM38oO0joJ2')
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
    }, (error) => {
      console.log('FAILED...', error);
    });
}

}
