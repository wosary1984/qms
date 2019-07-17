import {Injectable} from '@angular/core';

@Injectable()
export class MenuService {

  constructor() {}

  getTreeMenus() {
    const menus = [
      {
        pageid: 11, 
        link: "/starter", 
        icon: "fa fa-circle-o text-red", 
        name: 'Home', 
        haschilds:false
      },
      {
        pageid: 12, 
        link: "", 
        icon: "fa fa-dashboard", 
        name: 'Function#2', 
        haschilds: true, 
        childs: [
          {
            pageid: 121, 
            link: '#', 
            name: '获取远程数据列表',
            icon: "fa fa-circle-o text-red"
          }, 
          {
            pageid: 122, 
            link: '#', 
            name: '基础数据类别',
            icon: "fa fa-circle-o text-red"
          }, 
          {
            mid: 123, 
            link: '#', 
            name: '类别详细页面',
            icon: "fa fa-circle-o text-red"
          }
        ]
      }
    ];

    return menus;
  }

}
