import { TestBed } from '@angular/core/testing';

import { FashionServiceService } from './fashion-service.service';

describe('FashionServiceService', () => {
  let service: FashionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FashionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
