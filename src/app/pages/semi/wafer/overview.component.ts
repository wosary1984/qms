import { Component, OnInit, AfterViewInit } from '@angular/core';
import { WaferdataService } from 'src/app/service/wafer/waferdata.service';
declare var $: any;
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  providers: [WaferdataService]
})
export class OverviewComponent implements OnInit, AfterViewInit {
  private title: string = 'Wafer Map';
  private sPath = new Array('semi', 'wafer map');

  private waferid: string;

  ngAfterViewInit(): void {

  }

  constructor(private waferdataService: WaferdataService) { }

  ngOnInit() {
    this._initSelect2();
  }

  _initSelect2() {
    let that = this;
    that.waferdataService.getWaferCodeList().then(data => {
      if (data.code === 200 && data.data != null) {
        console.log(data.data);
        $('.select2').select2({
          data: data.data
        }); 

        $('#wafer_list').val(null).trigger("change");
      }
    })

    $('#wafer_list').on('select2:select', function (e) {
      var data = e.params.data;
      that.waferid = data.text;
      //console.log(this.waferid);
  });
  }


}
