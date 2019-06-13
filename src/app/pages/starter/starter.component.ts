import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';

@Component( {
    encapsulation: ViewEncapsulation.None,
    selector: 'app-starter',
    templateUrl: './starter.component.html',
    styleUrls: ['./starter.component.css']
} )
export class StarterComponent implements OnInit, AfterViewInit {

    sPageName: string = 'start';

    ngAfterViewInit(): void {

    }
 
    constructor() {
    }

    ngOnInit() {

    }



}
