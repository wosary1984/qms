import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PersonService } from 'src/app/service/person/person.service';
import { PageService } from 'src/app/service/menu/page.service';
import { Person } from 'src/app/model/entity';
declare var $: any;

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
  providers: [PersonService,PageService]
})
export class PersonComponent implements OnInit , AfterViewInit{

  private title: string = 'Person';
  private sPath = new Array('admin','person');
  private mode :string = 'view';
  private visible:string = 'none';

  //dtOptions: DataTables.Settings = {};

  private persons=[];
  private person =new Person();
  private actions = []

  ngAfterViewInit(): void {
    /* this.personSerive.getPersons().then(data =>{
      if(data.code === 200){
        this.persons  =  data.data;
      }
    }) */
    
  }

  constructor( private personSerive: PersonService, private pageService:PageService) { }

  ngOnInit() {
    this._setMode('view');
    this._initPage(this.title);
    this._initDataTable();
    
  }

  onBtnClick(value:any){
    this._setMode('view');
    if(value ==='success'){
      //this._setMode('view');
      this.refresh();
    }
   
  }

  onToorBarAction( value: any ) {

    if ( value.action === 'refresh' ) {
        this.refresh();
    } else if ( value.action === 'create' ) {
        this.create();
    } else if ( value.action === 'cancel' ) {

    }
  }

  create(){
    this._setMode('create');
    this.person =new Person();
  }

  refresh(){
    this._setMode('view');
    let table = $('#t_person').DataTable();
    table.ajax.reload();

  }

  _setMode(mode:string){
    this.mode = mode;
    this.visible = this.mode === 'view'? 'none':'';
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
      autoWidth: false,
      serverSide: true,
      processing: true,
      searching: false, // 自带的搜索
      ajax: (dataTablesParameters: any, callback) => {
        //console.log(dataTablesParameters);
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
          return row.lastname +' '+ row.firstname ;
        }},
        { data: 'gender', defaultContent:'N/A' },
        { data: 'identityno' },
        { data: 'username' },
        { data: function(row, type, val, meta){
          return that._hasUser(row.username);
        } }
      ],
      columnDefs: [
        { 
          targets: [1,2,3,4,5],
          orderable:false
        },
        { 
          targets: 5,
          render: function ( data, type, full, meta ) {
            if(data ==='No'){
              return '<a href="javascript:void(0)" onclick="'+that._createUser()+'">Create User</a>';
            }
          }
        } 
      ]
  })
}

  _createUser(){

  }
  _hasUser(value: any){
    if(!value)
    return 'No';
    else return 'Yes';
  }


}
