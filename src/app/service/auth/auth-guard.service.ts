import { Injectable, Inject } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
        return this.service.checkSession()
            .then(auth => {
                if (auth && !auth.hasError && auth.isLogged) {
                    let result: boolean = false;
                    let url: string = state.url.split('?', 1)[0];
                    if (url == '/login' || url == '/') {
                        result = true;
                    }
                    for (let ref of auth.user.userPermissions) {

                        for (let r of ref.split(';')) {
                            if (r == url) {
                                result = true;
                                break;
                            }
                        }
                    }
                    if (!result) {
                        this.service.navigateToError(this.router, 'The path is not avaiable', url)
                    }
                    return result;
                } else {
                    this.service.navigateToLogin(this.router, '/');
                    return false;
                }
            })
            .catch((error: any) => {
                return false;
            });

    }


    constructor(@Inject('auth') private service:AuthService, private router: Router) { }
}