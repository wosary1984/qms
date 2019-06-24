import {Component, OnInit, AfterViewInit} from '@angular/core';
import {Router} from '@angular/router';
import * as $ from 'jquery';
@Component({
  selector: 'app-layout',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PageComponent implements OnInit, AfterViewInit {

  ngAfterViewInit(): void {
  }

  constructor(public router: Router) {}

  ngOnInit() {
    if (this.router.url === '/') {
      //this.router.navigate(['/starter']);
    }
  }

}
