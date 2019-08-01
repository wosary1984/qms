import { Component, OnInit, Inject ,AfterViewInit } from '@angular/core';
import { PageService } from 'src/app/service/menu/page.service';
declare var $: any;

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css'],
    providers: [PageService]
})
export class SidebarComponent implements OnInit ,AfterViewInit{

    isActive = true;
    check: string = '';
    username = '';
    treeMenus = null;

    ngAfterViewInit(): void {
        //this.treeMenus = this.menuSerive.getTestTreeMenus();
    }

    constructor(@Inject('auth') private service, private menuSerive: PageService) {}

    ngOnInit() {

        this.username = sessionStorage.getItem('username');
        if (this.service.userAuth && this.service.userAuth.isLogged && this.service.userAuth.user) {
            this.username = this.service.userAuth.user.username;
        }

        const that = this;
        this.menuSerive.getTreeMenus().then(back => {
            if (back.code == 200) {
                that.treeMenus = back.data;
            }
        })

        $('.sidebar-menu').tree()
    }

    addActiveClass(element: any) {
        if (element === this.check) {
            this.check = '0';
        } else {
            this.check = element;
        }
    }
}