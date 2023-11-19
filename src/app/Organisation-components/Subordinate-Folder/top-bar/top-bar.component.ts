import { Component } from '@angular/core';
import { SCustomerService } from 'src/app/Services/scustomer.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {
  searchText: any;
  constructor(private searchService: SCustomerService){}
  
  OnSearch() {
    this.searchText=document.getElementsByTagName('input')[0].value;
    console.log(this.searchText)
    this.searchService.setSearchText(this.searchText);
  }


}
