import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgSubDashboardComponent } from './org-sub-dashboard.component';

describe('OrgSubDashboardComponent', () => {
  let component: OrgSubDashboardComponent;
  let fixture: ComponentFixture<OrgSubDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrgSubDashboardComponent]
    });
    fixture = TestBed.createComponent(OrgSubDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
