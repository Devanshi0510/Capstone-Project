import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SadminService } from 'src/app/Services/sadmin.service';
import { SCustomerService } from 'src/app/Services/scustomer.service';
import { SorganisationService } from 'src/app/Services/sorganisation.service';

@Component({
  selector: 'app-org-admin-dashboard',
  templateUrl: './org-admin-dashboard.component.html',
  styleUrls: ['./org-admin-dashboard.component.scss']
})
export class OrgAdminDashboardComponent {

  displayedColumns: string[] = ['id', 'name', 'phone', 'email','status'];
  posts:any;

  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchText: any;
  
  

   
  constructor(private service:SCustomerService, private sorgservice: SorganisationService) {}
   
  ngOnInit() {
     this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
      this.service.getPosts()
        .subscribe(response => {
          this.posts = response;
          console.log(this.posts);
          console.log(this.sorgservice.getId());
          const data = this.posts.filter(s => s.businessId === this.sorgservice.getId());
          console.log(data);
          this.dataSource.data = data;
          console.log(this.dataSource);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          console.log(this.dataSource);
        });

        this.service.getSearchText().subscribe((searchText) => {
          this.searchText = searchText;
          this.applyFilter(searchText);
        });

        
  }
    applyFilter(filterValue: string) {

    filterValue = filterValue.trim().toLowerCase();
    this.dataSource.filter = filterValue;
    console.log(this.dataSource)
  }
}
