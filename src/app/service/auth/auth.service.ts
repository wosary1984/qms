
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base.service';
import { Auth, User, BackMessage } from 'src/app/model/entity';
import RemoteServiceConfig from 'src/app/model/config';

@Injectable()
export class AuthService extends BaseService {

    userAuth: Auth;

    constructor(http: HttpClient) {
        super(http);
        this.servicename = 'AuthService-用户权限服务';
    }

    public loginWithCredentials( username: string, password: string ): Promise<Auth> {
        // return this.userService
        return this.login( username, password )
            .then( back => {
                this.userAuth = Object.assign( {}, this.createAuth( back ) );
                return this.userAuth;
            } )
            .catch(( error: any ) => this.handleError( 'loginWithCredentials', error ) );
    }

    private login( username: string, password: string ): Promise<BackMessage> {
        const path = '/api/session/login';
        const url = `${RemoteServiceConfig.host}${RemoteServiceConfig.contextpath}${path}`;
        let user = {
            "username": username,
            "password": password
        };
        return this.http.post( url, JSON.stringify( user ), { observe: 'response', withCredentials: true } )
            .toPromise()
            .then( res => {
                const status: number = res.status; // SSM框架返回的状态
                if ( status === 200 ) { // 服务端正确执行
                    let back = res.body as BackMessage;

                    if ( res.headers.get( 'X-CSRF-TOKEN' ) != null ) {
                        back.xsrfToken = res.headers.get( 'X-CSRF-TOKEN' );
                    }
                    return back;
                } else {
                    const back: BackMessage = new BackMessage();
                    back.code = -1 
                    return back;
                }
            } )
            .catch(( error: any ) => this.handleError( 'login', error ) );
    }

    public async logout(): Promise<BackMessage> {
        const path = '/api/session/logout';
        const url = `${RemoteServiceConfig.host}${RemoteServiceConfig.contextpath}${path}`;
        const headers = new HttpHeaders().set("Content-Type", "application/json;charset=UTF-8");
        try {
            const res = await this.http.get(url, { observe: 'response', withCredentials: true })
                .toPromise();
            const status: number = res.status;
            console.log("response:", res.body);
            this.userAuth = null;
            // 服务端正确执行
            if (status === 200) {
                return res.body as BackMessage;
            }
            else {
                const back: BackMessage = new BackMessage();
                back.code = -1;
                return back;
            }
        }
        catch (error) {
            return await this.handleError('logout', error);
        }
    }

    public checkSession(): Promise<Auth> {
        const path = '/my/session';
        const url = `${RemoteServiceConfig.host}${RemoteServiceConfig.contextpath}${path}`;
        //const headers = new HttpHeaders().set("Content-Type", "application/json;charset=UTF-8");

        return this.http.get(url, { observe: 'response', withCredentials: true })
            .toPromise()
            .then(res => {
                const status: number = res.status;
                // 服务端正确执行
                if (status === 200) {
                    let back = res.body as BackMessage;
                    if (res.headers.get('X-CSRF-TOKEN') != null) {
                        back.xsrfToken = res.headers.get('X-CSRF-TOKEN');
                    }
                    this.userAuth = Object.assign({}, this.createAuth(back));
                } else {
                    this.userAuth = null;
                }
                return this.userAuth;
            })
            .catch((error: any) => this.handleError('check session', error));
    }

    private createAuth(back: BackMessage): Auth {

        const auth = new Auth();

        auth.redirectUrl = (sessionStorage.getItem('redirectUrl') === null) ? '/' : sessionStorage.getItem('redirectUrl');

        if (back.code == 200 && back.status ==='S') {
            auth.hasError = false;
            if (back.action.toUpperCase() == 'login'.toUpperCase() || back.action.toUpperCase() == 'access'.toUpperCase()) {
                auth.user = new User();
                auth.user.username = back.data.userName;
                auth.user.userPermissions = back.data.userPermissions;
                auth.isLogged = back.data.isLogged;
                auth.xsrfToken = back.xsrfToken;
            }
        }
        else {
            auth.hasError = true;
            auth.errMsg = back.message;
        }

        return auth;
    }

}
