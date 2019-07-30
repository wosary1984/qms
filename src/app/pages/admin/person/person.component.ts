import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonService } from 'src/app/service/person/person.service';
declare var $: any;

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
  providers: [PersonService]
})
export class PersonComponent implements OnInit , AfterViewInit{

  private sTitle: string = 'Person';
  private sSmallTitle: string ='Person List';
  private sPath = new Array('admin','person');

  //dtOptions: DataTables.Settings = {};

  private persons=[];

  ngAfterViewInit(): void {
    /* this.personSerive.getPersons().then(data =>{
      if(data.code === 200){
        this.persons  =  data.data;
      }
    }) */
    
  }

  constructor(private router: ActivatedRoute, private personSerive: PersonService) { }

  ngOnInit() {
    this._initDataTable();
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
