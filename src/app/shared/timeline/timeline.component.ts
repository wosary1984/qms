import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  constructor() { }

  private _data: any;
  @Input() set data(value: any) {
    this._data = value;
    //console.log(this._data);
  }
  get data(): any {
    return this._data;
  }

  aEvent: any[];

  aYear: any[];


  ngOnInit() {

    
    this.aEvent = [];

    this.aEvent.push(
      {
        group: '2000年',
        item: false,
        title: '',
        content: '',
        img: '',
        time: '2000/01/01'
      });

    this.aEvent.push(
      {
        group: '2000年',
        item: true,
        title: 'event1',
        content: 'Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles,\r\n ' +
          'weebly ning heekya handango imeem plugg dopplr jibjab, \r\n ' +
          'movity jajah plickers sifteo edmodo ifttt zimbra. Babblely odeo ' +
          'kaboodle quora plaxo ideeli hulu weebly balihoo...',
        img: '', time: '2001/01/01'
      });
    this.aEvent.push(
      {
        group: '2000年',
        item: true,
        title: 'event11',
        content: 'Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles,\r\n ' +
          'weebly ning heekya handango imeem plugg dopplr jibjab, \r\n ' +
          'movity jajah plickers sifteo edmodo ifttt zimbra. Babblely odeo ' +
          'kaboodle quora plaxo ideeli hulu weebly balihoo...',
        img: '', time: '2001/01/01'
      });
    this.aEvent.push(
      {
        group: '2001年',
        item: false,
        title: 'event2',
        content: 'Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles, weebly ning heekya handango imeem plugg dopplr jibjab, movity jajah plickers sifteo edmodo ifttt zimbra. Babblely odeo kaboodle quora plaxo ideeli hulu weebly balihoo...',
        img: '', time: '2001/01/01'
      });
    this.aEvent.push(
      {
        group: '2001',
        item: true,
        title: 'event2',
        content: 'Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles, weebly ning heekya handango imeem plugg dopplr jibjab, movity jajah plickers sifteo edmodo ifttt zimbra. Babblely odeo kaboodle quora plaxo ideeli hulu weebly balihoo...',
        img: '', time: '2001/01/01'
      });
    this.aEvent.push(
      {
        group: '2001',
        item: true,
        title: 'event3',
        content: 'Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles, weebly ning heekya handango imeem plugg dopplr jibjab, movity jajah plickers sifteo edmodo ifttt zimbra. Babblely odeo kaboodle quora plaxo ideeli hulu weebly balihoo...',
        img: '', time: '2001/01/01'
      });
  }

}
