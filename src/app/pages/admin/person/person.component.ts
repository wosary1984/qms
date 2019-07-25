import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {


  private sTitle: string = 'Person';
  private sSmallTitle: string ='Person List';

  
  private sPath = new Array('admin','person');

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {

    let r = this.router;
    if( r != undefined){
      r.url.subscribe(url=>{
        console.log( url[0].path );
      })
    }
  }

}
