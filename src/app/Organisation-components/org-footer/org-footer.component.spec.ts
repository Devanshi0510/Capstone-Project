import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgFooterComponent } from './org-footer.component';

describe('OrgFooterComponent', () => {
  let component: OrgFooterComponent;
  let fixture: ComponentFixture<OrgFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrgFooterComponent]
    });
    fixture = TestBed.createComponent(OrgFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
