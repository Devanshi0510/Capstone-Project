import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SCustomerService } from 'src/app/Services/scustomer.service';

@Component({
  selector: 'app-delete-cust',
  templateUrl: './delete-cust.component.html',
  styleUrls: ['./delete-cust.component.scss']
})
export class DeleteCustComponent {
  addStud: FormGroup;

ngOnInit()
{

}



  constructor(private http: HttpClient, private custService: SCustomerService,private activeRoute: ActivatedRoute,) {
    this.addStud = new FormGroup({
      // id: new FormControl(''),
      email :new FormControl(''),
      // phone : new FormControl('',[Validators.required, Validators.pattern("[0-9 ]{11}")]),
      // name :new FormControl(''),
    })
    
}

DeleteCustomerDetail(addStud:FormGroup)
{
console.log(this.addStud.value)
this.custService.DeleteCustomerDetail(addStud);
}
}
