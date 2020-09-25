import { TestBed } from '@angular/core/testing';

import { BmiBrainService } from './bmi-brain.service';

describe('BmiBrainService', () => {
  let service: BmiBrainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BmiBrainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
