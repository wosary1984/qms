import { TestBed, inject } from '@angular/core/testing';

import { WaferdataService } from './waferdata.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('WaferdataService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WaferdataService],
      imports:[  HttpClientTestingModule ]
    });
  });

  it('should be created', inject([WaferdataService], (service: WaferdataService) => {
    expect(service).toBeTruthy();
  }));
});
