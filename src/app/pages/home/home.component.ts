import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var Treant: any;
declare var $: any;

@Component( {
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
} )
export class HomeComponent implements OnInit, AfterViewInit {
    ngAfterViewInit(): void {
    }

    constructor() { }

    ngOnInit() {
        
    }

}
