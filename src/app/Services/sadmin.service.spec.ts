import { TestBed } from '@angular/core/testing';

import { SadminService } from './sadmin.service';

describe('SadminService', () => {
  let service: SadminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SadminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
