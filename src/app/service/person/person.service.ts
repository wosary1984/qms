import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PersonService extends BaseService{

  constructor(http: HttpClient) {
    super(http);
    this.servicename = 'PersonService - Person服务';
  }

  getPersons():Promise<any>{
    let path = '/api/persons';
    const url = this.serviceUrl( path );
    return this.getCommand(url,'getPersons');
  }
}
