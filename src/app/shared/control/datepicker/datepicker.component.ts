import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {

  @Output() onDateChange: EventEmitter<any> = new EventEmitter();

  private _date: any;

  @Input() set date(value) {
    this._date = value;
    // if (value) {
    //   let d = new Date(value);
    //   value = d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate();
    //   this._date = value;
    // }
  };
  get date(): any {
    return this._date;
  }
  constructor() { }

  ngOnInit() {
    this._initDatePicker();
  }
  _initDatePicker() {
    const that = this;
    $('#datetimepicker').datepicker({
      format: 'yyyy/mm/dd',
      autoclose: true
    });
    $("#datetimepicker").on("changeDate", function () {
      let value = $("#datetimepicker").val();
      that.onDateChange.emit(
        {
          date: value
        });
    });
  }

}
