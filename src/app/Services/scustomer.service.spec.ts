import { TestBed } from '@angular/core/testing';

import { SCustomerService } from './scustomer.service';

describe('SCustomerService', () => {
  let service: SCustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SCustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
