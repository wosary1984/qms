import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonService } from 'src/app/service/person/person.service';
import { PageService } from 'src/app/service/menu/page.service';
declare var $: any;

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
  providers: [PersonService,PageService]
})
export class PersonComponent implements OnInit , AfterViewInit{

  private sTitle: string = 'Person';
  private sSmallTitle: string =' ';
  private sPath = new Array('admin','person');

  //dtOptions: DataTables.Settings = {};

  private persons=[];

  private actions = [
    {
        name: 'refresh',
        icon: 'fa fa-refresh'
    },
    {
        name: 'create',
        icon: 'fa fa-plus'
    }
]

  ngAfterViewInit(): void {
    /* this.personSerive.getPersons().then(data =>{
      if(data.code === 200){
        this.persons  =  data.data;
      }
    }) */
    
  }

  constructor(private router: ActivatedRoute, private personSerive: PersonService, private pageService:PageService) { }

  ngOnInit() {
    this._initPage(this.sTitle);
    this._initDataTable();
  }

  onToorBarAction( value: any ) {

    if ( value.action === 'refresh' ) {
        this.refresh();
    } else if ( value.action === 'create' ) {
        //this.addPerson();
    } else if ( value.action === 'search' ) {

    }
    console.log( value );
  }

  refresh(){
    let table = $('#t_person').DataTable();
    table.ajax.reload();
  }

  _initPage(pagename:string ){
    const that = this;
    var compare = function (obj1, obj2) {
      var val1 = obj1.sequenceNumber;
      var val2 = obj2.sequenceNumber;
      if (val1 < val2) {
          return -1;
      } else if (val1 > val2) {
          return 1;
      } else {
          return 0;
      }            
  } 
    that.pageService.getPage(pagename).then(data =>{
      if(data.code === 200 && data.data != null){
        that.actions = data.data.actions.sort(compare);
        console.log(data.data)
      }
    })
  }

 

  _initDataTable(){
    const that = this;
    let table = $('#t_person').DataTable({
      serverSide: true,
      processing: true,
      searching: false, // 自带的搜索
      ajax: (dataTablesParameters: any, callback) => {
        console.log(dataTablesParameters);
        that.personSerive.getPersons().then(data =>{
          if(data.code === 200){
            that.persons  =  data.data;
            //console.log(that.persons);
            callback({
              recordsTotal: that.persons.length,
              recordsFiltered: that.persons.length,
              data: that.persons
            });
          }
        }) 
      },
      columns: [
        { data: 'personid' }, 
        { data: function(row, type, val, meta) {
          return row.lastname +row.firstname ;
        }},
        { data: 'gender', defaultContent:'N/A' },
        { data: 'identityno' },
        { data: function(row, type, val, meta){
          return that._hasUser(row.username);
        } }
      ],
      columnDefs: [
        { 
          targets: [1,2,3,4],
          orderable:false
        } 
      ]
  })
}

  _hasUser(value: any){
    if(!value)
    return false;
  }


}
