import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInjStatusComponent } from './admin-inj-status.component';

describe('AdminInjStatusComponent', () => {
  let component: AdminInjStatusComponent;
  let fixture: ComponentFixture<AdminInjStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminInjStatusComponent]
    });
    fixture = TestBed.createComponent(AdminInjStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
