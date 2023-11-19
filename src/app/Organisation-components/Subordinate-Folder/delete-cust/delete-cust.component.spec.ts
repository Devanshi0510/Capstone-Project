import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCustComponent } from './delete-cust.component';

describe('DeleteCustComponent', () => {
  let component: DeleteCustComponent;
  let fixture: ComponentFixture<DeleteCustComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteCustComponent]
    });
    fixture = TestBed.createComponent(DeleteCustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
