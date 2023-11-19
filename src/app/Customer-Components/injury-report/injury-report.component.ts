import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SCustomerService } from 'src/app/Services/scustomer.service';

@Component({
  selector: 'app-injury-report',
  templateUrl: './injury-report.component.html',
  styleUrls: ['./injury-report.component.scss']
})
export class InjuryReportComponent {
  latitude: number=0;
  longitude: number=0;
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private custService:SCustomerService) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      name: '',
      phone: '',
      birthDate: '',
      injuryDate: '',
      time: '',
      severity: '',
      instructions: '',
      location:'',
      help:'Needed'
    });
  }

 getLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
      }, (error) => {
        console.error('Geolocation error: ', error);
      });
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }

  submit() {
    console.log(this.myForm.value);
    console.log(this.latitude);
    console.log(this.longitude);


  this.custService.AddInjuryReport(this.myForm,this.latitude,this.longitude)
  }
}
