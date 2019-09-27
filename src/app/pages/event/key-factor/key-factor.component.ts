import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ConfirmDialogService } from 'src/app/service/util/confirm-dialog.service';
import { FactorDataService } from 'src/app/service/data/factor-data.service';
declare var $: any;

@Component({
  selector: 'app-key-factor',
  templateUrl: './key-factor.component.html',
  styleUrls: ['./key-factor.component.scss'],
  providers: []
})
export class KeyFactorComponent implements OnInit {

  factors = [];
  title: string = 'Key Facor List';
  actions = [{
    actionid: 8,
    action: 'create',
    actionName:'Create Factor',
    sequenceNumber: 2,
    icon: 'fa fa-plus',
    privilege: 'PERSON_WRITE_PRIVILEGE'
  }]

  constructor(private factorDataService: FactorDataService, private router: Router) { }

  ngOnInit() {
    this._initDataTable();
  }

  onToorBarAction(value : any) {
    if (value.action === 'create') {
      this._createFactor();
    } else if (value.action === 'cancel') {

    }
  }

  refresh() {
    let table = $('#key_factor').DataTable();
    table.ajax.reload();

  }
  _createFactor() {
    let factor = { id: '', key: '', name: '', desc: '' }
    const that = this;
    this.factorDataService.sendMessage('create', factor, function (created_factor: any) {
      let data = {
        'action': 'create',
        'factor': created_factor
      }
      that.factorDataService.createFactor(data).then(back => {
        if (back.code == 200) {
          //console.log(back.data);
          that.refresh();
        }
        else {
        }
      });

    }, function () {
      //alert("No clicked");  
    })
  }

  _initDataTable() {
    const that = this;
    let table = $('#key_factor').DataTable({
      autoWidth: false,
      serverSide: true,
      processing: true,
      searching: false, // 自带的搜索
      ajax: (dataTablesParameters: any, callback) => {
        console.log(dataTablesParameters);
        that.factorDataService.getFactors().then(data => {
          if (data.code === 200) {
            that.factors = data.data;
            callback({
              recordsTotal: that.factors.length,
              recordsFiltered: that.factors.length,
              data: that.factors
            });
          }
        })
      },
      columns: [
        { data: 'id' },
        { data: 'name' },
        { data: 'key' },
        { data: 'count' }
      ],
      columnDefs: [
        {
          targets: [0,1, 2],
          orderable: false
        },
        {
          targets: 2,
          render: function (data, type, full, meta) {
            return '<a href="javascript:void(0)" >' + data + '</a>';
          }
        }
      ]
    })
    $('#key_factor').on('click', 'tr', function () {
      var f = table.row(this).data();
      that.router.navigate(['/factor/event'], {
        queryParams: {
          key: f.key,
          factor: f.name
        }
      });
    });
  }
}
