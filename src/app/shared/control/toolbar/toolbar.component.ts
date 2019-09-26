import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Input() actions = [];

  @Input() title: string = 'test';

  @Output() onAction: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick(value: any) {
    this.onAction.emit(
      {
        action: value
      });
  }

  onSubmit(value: any) {
    this.onAction.emit(value);
  }

}
