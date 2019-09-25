import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FactorDataService } from 'src/app/service/data/factor-data.service';
declare var $: any;

@Component({
  selector: 'app-cu-event',
  templateUrl: './cu-event.component.html',
  styleUrls: ['./cu-event.component.scss']
})
export class CuEventComponent implements OnInit, AfterViewInit {

  ngAfterViewInit(): void {
  }


  message: any;
  event: any;
  constructor(private factorDataService: FactorDataService) { }

  ngOnInit() {
    this.factorDataService.getMessage().subscribe(message => {
      this.message = message;
    });
  }

  DateChange(value: any){
    this.message.param.date = value.date;
  }

  onClickCheckBox( $event ) {
    let checked = $event.target.checked;
}
}
