import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-wafer',
  templateUrl: './wafer.component.html',
  styleUrls: ['./wafer.component.scss']
})
export class WaferComponent implements OnInit,AfterViewInit {
  ngAfterViewInit(): void {
    console.log("x");
  }

  constructor() { }

  ngOnInit() {
  }

}
