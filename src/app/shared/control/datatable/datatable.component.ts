import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit {

  private _data: any;
  @Input() set data(value: any) {
    this._data = value;
  }
  get data(): any {
    return this._data;
  }
  
  constructor() { }

  ngOnInit() {
    this.data = {
      'columns':['ID','Factor Name','Factor Key','Events'],
      'data':[{'id':40533,'name':'40533','key':'Qin','count':9},{'id':40533,'name':'40533','key':'Qin','count':9}]
    }
  }

}
