import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { BaseService } from '../base.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FactorDataService extends BaseService {

  private subject = new Subject<any>();
  constructor(http: HttpClient) {
    super(http);
    this.servicename = 'FactorService - Factor服务';
  }
  /**
   * send message to open modal dialog
   */
  sendMessage(mode: string, factor: any, saveFn: (factor: any) => void, cancelFn: () => void) {
    this.openDialog(mode, factor, saveFn, cancelFn);
  }
  openDialog(mode: string, factor: string, saveFn: (factor: any) => void, cancelFn: () => void) {
    let that = this;
    this.subject.next({
      mode: mode,
      factor: factor,
      saveFn:
        function () {
          that.subject.next(); //this will close the modal  
          saveFn(factor);
        },
      cancelFn: function () {
        that.subject.next();
        cancelFn();
      }
    });
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

  createFactor(data):Promise<any>{
    let path = '/api/factor';
    const url = this.serviceUrl( path );
    return this.postCommand( url, data, 'Create Factor' );
  }

  getFactors():Promise<any>{
    let path = '/api/factor';
    const url = this.serviceUrl( path );
    return this.getCommand(url,'Get Factor List');
  }
}
