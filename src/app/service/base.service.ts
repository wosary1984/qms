import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import RemoteServiceConfig from '../model/config';

export class BaseService {

    protected servicename: string;


    constructor( protected http: HttpClient ) {
    }

    protected handleError( functionName: string, error: any ): Promise<any> {
        console.error( `服务 : ${this.servicename} , 函数 : ${functionName} 。发生错误 : `, error );
        return Promise.reject( error );
    }

    protected serviceUrl( requestUrl: string ): string {
        //const url = RemoteServiceConfig.contextpath.trim() ===''? RemoteServiceConfig.concat()
        const url = RemoteServiceConfig.host + RemoteServiceConfig.contextpath + requestUrl;
        return url;
    }
    protected deleteCommand( url: string,  functionName: string ): Promise<any> {
        return this.http.delete( url,  { observe: 'response', withCredentials: true } )
            .toPromise()
            .then( res => {
                const status: number = res.status; 
                if ( status === 200 ) {
                    const back = {
                        code: status,
                        data: res.body
                    }
                    return back;
                } else {
                    const back = {
                        code: status
                    }
                    return back;
                }
            } )
            .catch(( error: any ) => this.handleError( functionName, error ) );
    }

    protected postCommand( url: string, data: string, functionName: string ): Promise<any> {
        return this.http.post( url, data, { observe: 'response', withCredentials: true } )
            .toPromise()
            .then( res => {
                const status: number = res.status; 
                if ( status === 200 ) {
                    const back = {
                        code: status,
                        data: res.body
                    }
                    return back;
                } else {
                    const back = {
                        code: status
                    }
                    return back;
                }
            } )
            .catch(( error: any ) => this.handleError( functionName, error ) );
    }

    protected postBlobCommand( url: string, data: any, functionName: string ): Promise<any> {
        return this.http.post( url, data, { observe: 'response', responseType: 'blob', withCredentials: true } )
            .toPromise()
            .then( res => {
                const status: number = res.status;
                if ( status === 200 ) {
                    const back = {
                        code: status,
                        data: res.body
                    }
                    return back;
                } else {
                    const back = {
                        code: status
                    }
                    return back;
                }
            } )
            .catch(( error: any ) => this.handleError( functionName, error ) );
    }

    protected getBlobCommand( url: string, functionName: string ): Promise<any> {
        return this.http.get( url, { observe: 'response', responseType: 'blob', withCredentials: true } )
            .toPromise()
            .then( res => {
                const status: number = res.status;
                // 服务端正确执行
                if ( status === 200 ) {
                    const back = {
                        code: status,
                        data: res.body
                    }
                    return back;
                } else {
                    const back = {
                        code: status
                    }
                    return back
                }
            } )
            .catch(( error: any ) => this.handleError( functionName, error ) );
    }

    protected getCommand( url: string, functionName: string ): Promise<any> {
        return this.http.get( url, { observe: 'response', withCredentials: true } )
            .toPromise()
            .then( res => {
                const status: number = res.status;
                // 服务端正确执行
                if ( status === 200 ) {
                    const back = {
                        code: status,
                        data: res.body
                    }
                    return back;
                } else {
                    const back = {
                        code: status
                    }
                    return back
                }
            } )
            .catch(( error: any ) => this.handleError( functionName, error ) );
    }

    public navigateToLogin( router: Router, redirectUrl: string ) {
        sessionStorage.setItem( 'redirectUrl', redirectUrl );
        router.navigate( ['/login'] );
    }

    public navigateToError( router: Router, title: string, message: string ) {
        router.navigate( ['/error'], {
            queryParams: {
                title: title,
                message: message
            }
        } );
    }

    public encodeImageAsBase64( file ) {
        // var deferred = $.Deferred();
        // if ( file ) {
        //     var reader = new FileReader();
        //     reader.onload = function( e ) {
        //         deferred.resolve( reader.result );
        //     };
        //     reader.readAsDataURL( file );
        // } else {
        //     deferred.resolve( undefined );
        // }
        // return deferred.promise();
    }

    public generateUUID(prifix: number):any {
        var date = new Date();
        var uuid = prifix + date.getDay() + date.getHours() + date.getMinutes() + date.getSeconds() + date.getMilliseconds() + Math.round( Math.random() * 10000 );
        return uuid;
    }
}
