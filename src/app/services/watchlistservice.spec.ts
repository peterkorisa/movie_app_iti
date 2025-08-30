import { TestBed } from '@angular/core/testing';

import { Watchlistservice } from './watchlistservice';

describe('Watchlistservice', () => {
  let service: Watchlistservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Watchlistservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
