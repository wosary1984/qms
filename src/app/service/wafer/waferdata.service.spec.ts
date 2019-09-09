import { TestBed } from '@angular/core/testing';

import { WaferdataService } from './waferdata.service';

describe('WaferdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WaferdataService = TestBed.get(WaferdataService);
    expect(service).toBeTruthy();
  });
});
