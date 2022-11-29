import { TestBed } from '@angular/core/testing';

import { VinilService } from './vinil.service';

describe('VinilService', () => {
  let service: VinilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VinilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
