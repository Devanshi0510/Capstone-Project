import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSubComponent } from './dashboard-sub.component';

describe('DashboardSubComponent', () => {
  let component: DashboardSubComponent;
  let fixture: ComponentFixture<DashboardSubComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardSubComponent]
    });
    fixture = TestBed.createComponent(DashboardSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
