import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/model/entity';
import { AuthService } from 'src/app/service/auth/auth.service';
declare var $:any;
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    auth: Auth;
    username: string;
    password: string;

    constructor(@Inject('auth') private service: AuthService, private router: Router) {
    }

    async ngOnInit() {

        // initial icheck style
        $(function () {
            $('input').iCheck({
              checkboxClass: 'icheckbox_square-blue',
              radioClass: 'iradio_square-blue',
              increaseArea: '20%' /* optional */
            });
          });

        return this.service.checkSession()
          .then( auth => {
              console.log( auth );
              if ( auth && !auth.hasError && auth.isLogged ) {
                  this.router.navigate( ['/'] );
              }
          } )
          .catch(( error: any ) => {
              let url: string = '/login';
              sessionStorage.setItem( 'redirectUrl', url );

              if ( error.status == 0 ) {
                  this.router.navigate( ['/error'], {
                      queryParams: {
                          errorMessage: error
                      }
                  } );
                  console.log( error );
              }
          } );
    }

    onSubmit(formValue: any): void {
        this.service
            .loginWithCredentials(formValue.username, formValue.password)
            .then(auth => {
                let redirectUrl = (auth.redirectUrl === null || auth.redirectUrl === '/login') ? '/' : auth.redirectUrl;
                if (!auth.hasError) {
                    this.router.navigate([redirectUrl]);
                    sessionStorage.removeItem('redirectUrl');
                    sessionStorage.removeItem('username');
                    //sessionStorage.setItem( 'username', String( auth.user.username ) );
                } else {

                    this.auth = Object.assign( {}, auth );
                }
            });

    }

}
