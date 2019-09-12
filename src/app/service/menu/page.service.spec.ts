import { TestBed, inject } from '@angular/core/testing';

import { PageService } from './page.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PageService],
      imports:[  HttpClientTestingModule ]
    });
  });

  it('should be created', inject([PageService], (service: PageService) => {
    expect(service).toBeTruthy();
  }));
});
