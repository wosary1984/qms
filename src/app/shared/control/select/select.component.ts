import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  constructor() { }

  private _data: any;
  @Input() set data(value) {
    this._data = value
    if ($('#qms-select')) {
      $('#qms-select').select2({
        data: value,
        tags: true,
        theme: "classic",
        multiple: true,
        createTag: function (param) {
          return null;
        }
      });
    }
  }
  get data() {
    return this._data;
  }

  @Output() select2change: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    this._initSelect2();
  }
  _initSelect2() {
    const that = this;
    let qms_select2 = $('#qms-select');
    qms_select2.select2({
      data: this.data,
      tags: true,
      theme: "classic",
      multiple: true
    });
    qms_select2.on('select2:select', function (e) {
      that.select2change.emit(
        {
          action: 'select2',
          value: qms_select2.select2('data')
        });
    });

    qms_select2.on('select2:unselect', function (e) {
      that.select2change.emit(
        {
          action: 'select2',
          value: qms_select2.select2('data')
        });
    });
  }
}
