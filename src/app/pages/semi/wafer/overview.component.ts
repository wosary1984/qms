import { Component, OnInit, AfterViewInit } from '@angular/core';
import { WaferdataService } from 'src/app/service/wafer/waferdata.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  providers: [WaferdataService]
})
export class OverviewComponent implements OnInit,AfterViewInit {
  private title: string = 'Wafer Map';
  private sPath = new Array('semi','wafer map');

  private waferid:string;

  ngAfterViewInit(): void {
 
  }

  constructor(private waferdataService: WaferdataService) { }

  ngOnInit() {

    this.waferid = 'w2';
  }

  

}
