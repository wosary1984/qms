import { TestBed, inject } from '@angular/core/testing';

import { HttpxsrfinterceptorService } from './httpxsrfinterceptor.service';
import { AuthService } from '../auth/auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('HttpxsrfinterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpxsrfinterceptorService,{ provide: 'auth', useClass: AuthService }],
      imports:[  HttpClientTestingModule,RouterTestingModule ]
      
    });
  });

  it('should be created', inject([HttpxsrfinterceptorService], (service: HttpxsrfinterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
