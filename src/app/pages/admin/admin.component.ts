import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';

@Component( {
    encapsulation: ViewEncapsulation.None,
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
} )
export class AdminComponent implements OnInit, AfterViewInit {


    ngAfterViewInit(): void {

    }
 
    constructor() {
    }

    ngOnInit() {

    }



}
