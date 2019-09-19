import { TestBed } from '@angular/core/testing';

import { FactorDataService } from './factor-data.service';

describe('FactorDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FactorDataService = TestBed.get(FactorDataService);
    expect(service).toBeTruthy();
  });
});
