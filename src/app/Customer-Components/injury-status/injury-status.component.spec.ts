import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjuryStatusComponent } from './injury-status.component';

describe('InjuryStatusComponent', () => {
  let component: InjuryStatusComponent;
  let fixture: ComponentFixture<InjuryStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InjuryStatusComponent]
    });
    fixture = TestBed.createComponent(InjuryStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
