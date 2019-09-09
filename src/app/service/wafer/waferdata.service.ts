import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class WaferdataService  extends BaseService{

  constructor(http: HttpClient) {
    super(http);
    this.servicename = 'WaferDataService - 数据服务';
  }

  getWaferData(waferid):Promise<any>{
    let path = 'api/wafer/'+waferid;
    const url = this.serviceUrl( path );
    return this.getCommand(url,'Get Wafer Data');
  }
}
