import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from "rxjs";

@Component( {
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    providers: [ ]
} )
export class HeaderComponent implements OnInit {

    private username = '';
    private oReceivedMsg;
    private aMessages = [];
    private datasubscription: Subscription;
    private statesubscription: Subscription;

    constructor( @Inject( 'auth' ) private service, private router: Router ) {

    }

    ngOnInit() {

        this.username = sessionStorage.getItem( 'username' );
        if ( this.service.userAuth && this.service.userAuth.isLogged && this.service.userAuth.user ) {
            this.username = this.service.userAuth.user.username;
        }

        this.getUserMessages();
    }
    private onStateChange = ( state: String ) => {
        console.log( 'WS connection state changed ' + state );
    }

    getUserMessages() {
    }

    onClick_logout() {

        this.service
            .logout()
            .then( back => {
                if ( back.success ) {

                } else {
                    console.log( back.message );
                }
            } );
        sessionStorage.removeItem( 'username' );
        this.router.navigate( ['/login'] );
    }
}
