import { Component, OnInit, Input, Inject } from '@angular/core';
import { MenuService } from 'src/app/service/menu/menu.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css'],
    providers: [MenuService]
})
export class SidebarComponent implements OnInit {

    isActive = true;
    check: string = '';

    username = '';

    treeMenus = null;

    constructor(@Inject('auth') private service, private menuSerive: MenuService) {}

    ngOnInit() {

        this.username = sessionStorage.getItem('username');
        if (this.service.userAuth && this.service.userAuth.isLogged && this.service.userAuth.user) {
            this.username = this.service.userAuth.user.username;
        }
        //this.treeMenus = this.menuSerive.getTestTreeMenus();
        this.menuSerive.getTreeMenus().then(back => {
            if (back.code == 200) {
                this.treeMenus = back.data;
            }
        })
    }

    addActiveClass(element: any) {
        if (element === this.check) {
            this.check = '0';
        } else {
            this.check = element;
        }
    }
}