import {Injectable} from '@angular/core';
import { BaseService } from '../base.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MenuService extends BaseService{

  constructor(http: HttpClient) {
    super(http);
    this.servicename = 'MenuService - 菜单服务';
  }

  getTreeMenus():Promise<any>{
    let path = '/api/portal';
    const url = this.serviceUrl( path );
    return this.getCommand(url,'getTreeMenus');
  }

  getTestTreeMenus() {
    const menus = [
      {
          "pageid": 5,
          "pagename": "Home",
          "hasDeleted": false,
          "hasChild": false,
          "sequenceNumber": null,
          "path": "/starter",
          "icon": "fa fa-circle-o text-red",
          "privilege": null,
          "parentPageName": null,
          "childs": []
      },
      {
          "pageid": 6,
          "pagename": "Admin",
          "hasDeleted": false,
          "hasChild": true,
          "sequenceNumber": null,
          "path": null,
          "icon": "fa fa-dashboard",
          "privilege": null,
          "parentPageName": null,
          "childs": [
              {
                  "pageid": 7,
                  "pagename": "Person",
                  "hasDeleted": false,
                  "hasChild": false,
                  "sequenceNumber": null,
                  "path": "/person",
                  "icon": "fa fa-circle-o text-red",
                  "privilege": "PERSON_READ_PRIVILEGE",
                  "parentPageName": "Admin",
                  "childs": []
              }
          ]
      }
  ];

    return menus;
  }

}
