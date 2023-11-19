import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
// import { ICustomer } from 'src/app/Model/ICustomer';
import { SCustomerService } from 'src/app/Services/scustomer.service';

@Component({
  selector: 'app-org-sub-dashboard',
  templateUrl: './org-sub-dashboard.component.html',
  styleUrls: ['./org-sub-dashboard.component.scss']
})
export class OrgSubDashboardComponent implements OnInit{

  displayedColumns: string[] = ['id', 'name', 'phone', 'email'];
  posts:any;

  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchText: any;
  
  

   
  constructor(private service:SCustomerService) {}
   
  ngOnInit() {
     this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
      this.service.getPosts()
        .subscribe(response => {
          this.posts = response;
          console.log(this.posts)
          this.dataSource.data = this.posts;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          console.log(this.dataSource)
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
