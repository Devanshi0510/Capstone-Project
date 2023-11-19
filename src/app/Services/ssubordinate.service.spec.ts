import { TestBed } from '@angular/core/testing';

import { SsubordinateService } from './ssubordinate.service';

describe('SsubordinateService', () => {
  let service: SsubordinateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SsubordinateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
