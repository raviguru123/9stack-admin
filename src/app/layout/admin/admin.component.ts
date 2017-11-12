import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {data} from './data';
@Component({
    selector: 'admin-dashboard',
    templateUrl:'./admin.component.html',
    styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
    settings = {
        columns: {
          id: {
            title: 'ID'
          },
          name: {
            title: 'Full Name'
          },
          username: {
            title: 'User Name'
          },
          email: {
            title: 'Email'
          }
        }
      };
      data=[];
      constructor() {
        this.data=data;
      }
}
