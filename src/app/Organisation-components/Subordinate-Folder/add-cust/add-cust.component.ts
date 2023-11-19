import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SCustomerService } from 'src/app/Services/scustomer.service';
import { SorganisationService } from 'src/app/Services/sorganisation.service';

@Component({
  selector: 'app-add-cust',
  templateUrl: './add-cust.component.html',
  styleUrls: ['./add-cust.component.scss']
})
export class AddCustComponent{
  addStud: FormGroup;
id:String
  constructor(private http: HttpClient, private studentsService:SCustomerService,private fb: FormBuilder,private custService: SorganisationService) {
    this.addStud = this.fb.group({
      name: ['', [Validators.required]], 
      phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      email: ['', [Validators.required, Validators.email]]
    })


  }
  AddStudentDetail(addStud:FormGroup) {
    if(addStud.valid){
      this.studentsService.AddCustomerDetail(addStud)
    } else {
      alert("Form empty");
      
    }
    // console.log(this.addStud.value);
    // this.http.post( "https://6538f4a8a543859d1bb24431.mockapi.io/student",this.addStud.getRawValue())
    // .subscribe((res)=>{console.log(res);});
  }
}
