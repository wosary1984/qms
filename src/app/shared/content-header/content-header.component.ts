import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-content-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.scss']
})
export class ContentHeaderComponent implements OnInit {

  @Input() sTitle: string;
  @Input() sSmallTitle: string;
  @Input() sPath = [];
  constructor() { }

  ngOnInit() {
  }

}
