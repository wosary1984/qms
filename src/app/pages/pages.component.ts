import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;

@Component({
    selector: 'app-layout',
    templateUrl: './pages.component.html',
    styleUrls: ['./pages.component.scss']
})
export class PageComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() {
        if (this.router.url === '/') {
            //this.router.navigate(['/starter']);
        }

        $(document).ready(() => {
            $('body').layout('fix');
        });
    }

}