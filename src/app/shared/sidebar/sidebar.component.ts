import { Component, OnInit, Input, Inject } from '@angular/core';
import { MenuService } from 'src/app/service/menu/menu.service';

@Component( {
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css'],
    providers: [ MenuService]
} )
export class SidebarComponent implements OnInit {

    isActive = true;
    showMenu = '';
    check: string ='';

    showSubMenu = '';
    username = '';

    treeMenus;

    constructor( @Inject( 'auth' ) private service,private menuSerive: MenuService) { }

    ngOnInit() {

        this.username = sessionStorage.getItem( 'username' );
        if ( this.service.userAuth && this.service.userAuth.isLogged && this.service.userAuth.user ) {
            this.username = this.service.userAuth.user.username;
        }

        this.treeMenus = this.menuSerive.getTreeMenus();
        console.log(this.treeMenus);
    }

    addExpandClass( element: any ) {
        if ( element === this.showMenu ) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }

    addActiveClass( element: any ) {
        if ( element === this.check ) {
            this.check = '0';
        } else {
            this.check = element;
        }
    }
}
