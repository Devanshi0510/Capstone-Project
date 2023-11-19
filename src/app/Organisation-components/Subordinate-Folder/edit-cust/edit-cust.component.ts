import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SCustomerService } from 'src/app/Services/scustomer.service';
import { SorganisationService } from 'src/app/Services/sorganisation.service';

@Component({
  selector: 'app-edit-cust',
  templateUrl: './edit-cust.component.html',
  styleUrls: ['./edit-cust.component.scss']
})
export class EditCustComponent {

  addStud: FormGroup;

ngOnInit()
{

}



  constructor(private http: HttpClient, private custService: SCustomerService,private activeRoute: ActivatedRoute,) {
    this.addStud = new FormGroup({
      // id: new FormControl(''),
      email :new FormControl(''),
      phone : new FormControl('',[Validators.required, Validators.pattern("[0-9 ]{11}")]),
      name :new FormControl(''),
    })
    
}

EditCustomerDetail(addStud:FormGroup)
{
console.log(this.addStud.value)
this.custService.EditCustomerDetail(addStud);
}
}
