import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgCardsComponent } from './org-cards.component';

describe('OrgCardsComponent', () => {
  let component: OrgCardsComponent;
  let fixture: ComponentFixture<OrgCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrgCardsComponent]
    });
    fixture = TestBed.createComponent(OrgCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
