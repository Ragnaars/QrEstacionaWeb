import { TestBed } from '@angular/core/testing';

import { FireEstService } from './fire-est.service';

describe('FireEstService', () => {
  let service: FireEstService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FireEstService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
