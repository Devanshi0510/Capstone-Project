import { TestBed } from '@angular/core/testing';

import { SorganisationService } from './sorganisation.service';

describe('SorganisationService', () => {
  let service: SorganisationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SorganisationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
