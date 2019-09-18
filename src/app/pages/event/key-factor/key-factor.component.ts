import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-key-factor',
  templateUrl: './key-factor.component.html',
  styleUrls: ['./key-factor.component.scss']
})
export class KeyFactorComponent implements OnInit {

  title: string = 'Key Facor List';
  actions = [{
    actionid: 8,
    action: 'create',
    sequenceNumber: 2,
    icon: 'fa fa-plus',
    privilege: 'PERSON_WRITE_PRIVILEGE'
  }]

  constructor() { }

  ngOnInit() {
    console.log(this.actions);
    this._initDataTable();
  }

  _initDataTable(){
    const that = this;
    let table = $('#key_factor').DataTable({
      autoWidth: false,
      serverSide: true,
      processing: true,
      searching: false, // 自带的搜索
      ajax: (dataTablesParameters: any, callback) => {
        console.log(dataTablesParameters);
        // that.personSerive.getPersons().then(data => {
        //   if (data.code === 200) {
        //     that.persons = data.data;
        //     //console.log(that.persons);
        //     callback({
        //       recordsTotal: that.persons.length,
        //       recordsFiltered: that.persons.length,
        //       data: that.persons
        //     });
        //   }
        // })
      },
      columns: [
        { data: 'personid' },
        {
          data: function (row, type, val, meta) {
            return row.lastname + ' ' + row.firstname;
          }
        },
        { data: 'gender', defaultContent: 'N/A' },
        { data: 'identityno' },
        { data: 'username' },
        {
          data: function (row, type, val, meta) {
            return ;
          }
        }
      ],
      columnDefs: [
        {
          targets: [1, 2],
          orderable: false
        },
        {
          targets: 2,
          render: function (data, type, full, meta) {
            if (data === 'No') {
              ;
            }
          }
        }
      ]
    })
  }

}
