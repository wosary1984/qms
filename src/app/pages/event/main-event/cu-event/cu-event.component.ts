import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FactorDataService } from 'src/app/service/data/factor-data.service';
declare var $: any;

@Component({
  selector: 'app-cu-event',
  templateUrl: './cu-event.component.html',
  styleUrls: ['./cu-event.component.scss']
})
export class CuEventComponent implements OnInit, AfterViewInit {
  message: any;
  event: any;
  selectOptions: any[];

  ngAfterViewInit(): void {
  }

  constructor(private factorDataService: FactorDataService) { }

  ngOnInit() {
    const that = this;
    that.factorDataService.getMessage().subscribe(message => {
      that.message = message;
      if (message) {
        that.factorDataService.getFactors().then(data => {
          if (data.code === 200) {
            let factors = data.data;
            that.selectOptions = [];
            let tmp = new Array();
            factors.forEach(element => {
              let s = false;
              if (that.message.param.relatedFactors) {
                that.message.param.relatedFactors.forEach(r => {
                  if (element.key === r.key) {
                    s = true;
                    return;
                  }
                })
              }
              tmp.push({ 'id': element.key, 'text': element.name, 'selected': s, 'factor': element })
            });
            that.selectOptions = tmp;
          }
        })
      } else {
        that.selectOptions = [];
      }
    });
  }

  DateChange(value: any) {
    this.message.param.date = value.date;
  }

  onClickCheckBox($event) {
    let checked = $event.target.checked;
  }

  select2change(param: any) {
    let selected = param.value;
    const that = this;
    let rf = new Array();
    // if (that.message.param.relatedFactors !== undefined) {
    //   rf = that.message.param.relatedFactors;
    // }
    //rf.map
    //that.message.param.relatedFactors.forEach
    selected.forEach(e => {
      rf.push(e.factor);
    })
    that.message.param.relatedFactors = rf;
  }
}
