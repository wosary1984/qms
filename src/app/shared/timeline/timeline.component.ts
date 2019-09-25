import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  constructor() { }

  @Output() onAction: EventEmitter<any> = new EventEmitter();

  private _data: any;
  @Input() set data(value: any) {
    this._data = value;
    //console.log(this._data);
  }
  get data(): any {
    return this._data;
  }

  displayDate(bc, date1, date2) {
    if (!bc && date1 !== null) {
      return new Date(date1).toLocaleString();
    } else if (bc && date2 !== null) {
      return '公元前' + date2 + '年';
    }
  }

  displayYear(bc, date2) {
    if (bc) {
      return '公元前' + date2 + '年';
    }
    else {
      return '公元' + date2 + '年';
    }
  }

  ngOnInit() {

  }

  onClick(action: any, key) {
    this.onAction.emit(
      {
        action: action,
        key: key
      });
  }

}
