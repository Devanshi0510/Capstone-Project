import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubordinatePortalComponent } from './subordinate-portal.component';

describe('SubordinatePortalComponent', () => {
  let component: SubordinatePortalComponent;
  let fixture: ComponentFixture<SubordinatePortalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubordinatePortalComponent]
    });
    fixture = TestBed.createComponent(SubordinatePortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
