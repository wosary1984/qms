import { Component, OnInit, Output, EventEmitter } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {

  @Output() onDateChange: EventEmitter<any> = new EventEmitter();

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
