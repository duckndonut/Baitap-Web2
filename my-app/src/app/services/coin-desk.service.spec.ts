import { TestBed } from '@angular/core/testing';

import { CoinDeskService } from './coin-desk.service';

describe('CoinDeskService', () => {
  let service: CoinDeskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoinDeskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
