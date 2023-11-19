import { OnInit } from '@angular/core';
import { Component, OnDestroy, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SCustomerService } from 'src/app/Services/scustomer.service';
import { SorganisationService } from 'src/app/Services/sorganisation.service';

@Component({
  selector: 'app-admin-inj-status',
  templateUrl: './admin-inj-status.component.html',
  styleUrls: ['./admin-inj-status.component.scss']
})
export class AdminInjStatusComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['id', 'name', 'phone', 'email','status','help'];
  posts:any;

  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchText: any;
  subscriptions: Subscription[] = [];
  

   
  constructor(private service:SCustomerService, private router: Router,private sorgservice: SorganisationService,private activatedRoute: ActivatedRoute
    ) {}
   
  ngOnInit() {

      const sub1 = this.service.getPosts()
        .subscribe(response => {
          this.posts = response;
          console.log(this.posts)
          console.log(this.sorgservice.getId())
          const filteredPosts = this.posts.filter(post => post.injuries.status === 'Pending' && post.businessId === this.sorgservice.getId());
          this.dataSource.data = filteredPosts;
          console.log(this.dataSource)
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        });
        this.subscriptions.push(sub1);

        const sub2 = this.service.getSearchText().subscribe((searchText) => {
          this.searchText = searchText;
          this.applyFilter(searchText);
        });

        this.subscriptions.push(sub2);

        
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s?.unsubscribe());
  }
    applyFilter(filterValue: string) {

    filterValue = filterValue.trim().toLowerCase();
    this.dataSource.filter = filterValue;
    console.log(this.dataSource)
    
  }

  showStatus(id:any)
  {
   console.log(id)
   this.router.navigate([`/admin-portal/dashboard-admin/admin-inj-status/${id}`]);
  }
}

