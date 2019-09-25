import { HttpEvent } from "@angular/common/http";
import { HttpXsrfTokenExtractor } from "@angular/common/http";
import { HttpHandler } from "@angular/common/http";
import { HttpRequest } from "@angular/common/http";
import { HttpInterceptor, HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { Injectable, Inject } from '@angular/core';
import { Observable, of, throwError } from "rxjs";
import { catchError, tap } from 'rxjs/operators';
import { Router } from "@angular/router";
import { AuthService } from '../auth/auth.service';

@Injectable()
export class HttpxsrfinterceptorService implements HttpInterceptor {

    constructor(@Inject('auth') private service: AuthService, private tokenExtractor: HttpXsrfTokenExtractor, private router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpResponse<any> | HttpEvent<any>> {
        const headerName = 'X-CSRF-TOKEN';

        if (req.method == 'POST' || req.method == 'PUT' ||req.method == 'DELETE') {
            if (this.service.userAuth != null && this.service.userAuth.xsrfToken ) {
                let token = this.service.userAuth.xsrfToken;
                if (token !== null && !req.headers.has(headerName)) {
                    req = req.clone({ headers: req.headers.set(headerName, token) });
                }
            }
        }

        return next.handle(req).pipe(
          tap((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
                // do stuff with response if you want
                //console.log('processing response', event);
            }
          }),
          catchError( (error : HttpErrorResponse)  => {  
            if ( error instanceof HttpErrorResponse ){
                if ( error.status === 401 ) {
                    // redirect to the login route or show a modal
                    this.service.navigateToLogin(this.router,'/login');
                }
                else if(error.status ===0){
                    // backend service is not avaiable
                    this.service.navigateToError(this.router,'Service is not avaiable', error.message)
                }
            }
            return throwError(error);
          })
        );
    }

    
    handleData(event: HttpResponse<any> | HttpErrorResponse): Observable<any> {
        switch (event.status) {
            case 200:
                if (event instanceof HttpResponse) {
                    const body: any = event.body;
                }
                break;
            case 401: // 未登录状态码
                // redirect to the login route or show a modal
                this.service.navigateToLogin(this.router, '/');
                break;
            case 404:
            case 500:
                break;
            default:
                // backend service is not avaiable
                if (event instanceof HttpErrorResponse) {
                    this.service.navigateToError(this.router, 'Service is not avaiable', event.message)
                }
                return of(event);
        }
    }
}
