import { Component, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import * as L from 'leaflet';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ICustomer } from 'src/app/Model/ICustomer';
import { SadminService } from 'src/app/Services/sadmin.service';
import { SCustomerService } from 'src/app/Services/scustomer.service';

@Component({
  selector: 'app-cust-injury-stat',
  templateUrl: './cust-injury-stat.component.html',
  styleUrls: ['./cust-injury-stat.component.scss'],
})
export class CustInjuryStatComponent implements OnInit, OnDestroy {
  private map: any;
  subscriptions: Subscription[] = [];
  routeSub: any;
  id: any;
  data: ICustomer;
  marker: any;
  
  constructor(
    private route: ActivatedRoute,
    private adminService: SadminService,
    private router: Router,
    private custService:SCustomerService,
    private http: HttpClient
  ) {}
  ngOnInit() {
    this.populateCard();
    
  }
  ngOnDestroy() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.marker) {
      this.marker.setLatLng([this.data.injuries.latitude, this.data.injuries.longitude]);
    }
  }

  populateCard() {
    this.routeSub = this.route.params.subscribe((params) => {
      console.log(params);
    
      this.id = params['id'];
      console.log(this.id);
      this.adminService.getCustomerByid(this.id).subscribe((res) => {
        this.data = res;
        console.log(this.data);
        this.initMap();
       this.loadInjuryReports();
      });
    });

    this.subscriptions.push(this.routeSub);
    console.log(this.id);
  }


  private initMap(): void {
    this.map = L.map('map', {
      center: [17.3850,78.4867 ], 
      zoom: 8
    });

    

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.map);
  }

  private loadInjuryReports(): void {
    console.log(this.data.injuries.latitude)
    console.log(this.data.injuries.longitude)

    const myIcon = L.icon({
      iconUrl: '../../assets/pngtree-red-pin-location-for-maps-png-image_3118845.png',
      iconSize: [38, 38],
      iconAnchor: [19, 19],
      popupAnchor: [0, -19]
    });
    this.marker = L.marker([this.data.injuries.latitude, this.data.injuries.longitude], {icon: myIcon}).addTo(this.map)
  .bindPopup(`Injury reported here.`);
     
  }



  SendHelp(){
    this.UpdateHelpStatus();
  }

  UpdateHelpStatus(){


    this.http.get<ICustomer>(`https://localhost:7043/api/Customer/${this.id}`).subscribe((res) => {
     const data1= res;
     console.log(data1)
  data1.injuries.help="On the Way"
  console.log(data1)
     this.http
       .put(
        `https://localhost:7043/api/Customer/${this.id}`,
         data1
       )
       .subscribe((res) => {
         console.log(res);
       });
  })
  this.http.get<ICustomer>(`https://localhost:7043/api/Customer/${this.id}`).subscribe((res) => {this.data=res});

  }
}
