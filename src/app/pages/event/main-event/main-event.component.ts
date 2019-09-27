import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FactorDataService } from 'src/app/service/data/factor-data.service';
declare var $: any;

@Component({
  selector: 'app-main-event',
  templateUrl: './main-event.component.html',
  styleUrls: ['./main-event.component.scss']
})
export class MainEventComponent implements OnInit {

  factor: any;
  key: string;
  data: any[] = [];
  actions = [{
    actionid: 8,
    action: 'create',
    actionName: 'Add Event',
    sequenceNumber: 2,
    icon: 'fa fa-plus',
    privilege: ''
  }]


  constructor(private activatedRoute: ActivatedRoute, private factorDataService: FactorDataService) {
    activatedRoute.queryParams.subscribe(queryParams => {
      this.key = queryParams.key;
      //this.factor = queryParams.factor;
    })
  }

  onToorBarAction(param: any) {
    if (param.action === 'create') {
      this._createEvent();
    }
  }
  onTimelineAction(param: any) {
    if (param.action === 'delete') {
      this._deleteEvent(param.value);
    }
    else if (param.action === 'tag') {
      //alert ('sdasd');
    }
    else if (param.action === 'edit') {
      //console.log(param.value)
      let evt = param.value;
      this._editEvent(evt);
    }
  }

  _deleteEvent(key) {
    const that = this;
    that.factorDataService.deleteEvent(key).then(back => {
      if (back.code == 200) {
        that.factor = back.data;
        that._groupEventsByYear(that.factor);
      }
      else {
      }
    });
  }

  _editEvent(value) {
    if (!value)
      return;
    let event = value; event.factor = null;
    //console.log(JSON.stringify(value));
    let edit_event = JSON.parse(JSON.stringify(value)); edit_event.factor = this.factor;
    const that = this;
    this.factorDataService.sendMessage('edit', edit_event, function (updated_event: any) {
      let data = {
        'action': 'edit',
        'event': updated_event
      }
      that.factorDataService.updateEvent(data).then(back => {
        if (back.code == 200) {
          that.factor = back.data;
          that._groupEventsByYear(that.factor);
        }
        else {
        }
      });

    }, function () {
    })
  }

  _createEvent() {
    if (!this.key)
      return;
    let event = { key: this.key, factor: this.factor, eventid: '', title: '', content: '', date: '', bc: false }
    const that = this;
    this.factorDataService.sendMessage('create', event, function (created_event: any) {
      let data = {
        'action': 'create',
        'event': created_event
      }
      that.factorDataService.createEvent(data).then(back => {
        if (back.code == 200) {
          that.factor = back.data;
          that._groupEventsByYear(that.factor);
        }
        else {
        }
      });

    }, function () {
    })
  }

  ngOnInit() {
    this._getFactor(this.key);
  }

  _getFactor(key) {
    if (!key)
      return;
    const that = this;
    that.factorDataService.getFactor(this.key).then(back => {
      if (back.code == 200) {
        that.factor = back.data;
        that._groupEventsByYear(that.factor);
      }
      else {
      }
    });
  }

  _groupEventsByYear(factor) {
    const that = this;
    let map = new Map();
    factor.events.sort(function (a, b) {

      return ((a.year + a.month + a.day) * (a.bc ? -1 : 1)) > ((b.year + b.month + b.day) * (b.bc ? -1 : 1)) ? 1 : -1;

    }).forEach(element => {

      if (map.get(element.year) === undefined) {
        map.set(element.year, []);
      }
      let group = map.get(element.year);
      group.push(element);

    });
    that.data = [];
    map.forEach(function (key) {
      that.data.push({ 'year': key[0].year, 'group': true, 'bc': key[0].bc });
      key.forEach(function (e) {
        that.data.push(e);
      });

    })
  }

}
