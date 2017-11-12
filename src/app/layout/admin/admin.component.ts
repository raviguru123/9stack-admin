import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { LocalDataSource} from 'ng2-smart-table';
import {data} from './data';
@Component({
    selector: 'admin-dashboard',
    templateUrl:'./admin.component.html',
    styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
    settings = {
      editable:false,
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
      source: LocalDataSource;
      constructor() {
        this.source = new LocalDataSource(data);
      }

      onSearch(query: string = '') {
        this.source.setFilter([
          // fields we want to include in the search
          {
            field: 'id',
            search: query
          },
          {
            field: 'name',
            search: query
          },
          {
            field: 'username',
            search: query
          },
          {
            field: 'email',
            search: query
          }
        ], false);
        // second parameter specifying whether to perform 'AND' or 'OR' search 
        // (meaning all columns should contain search query or at least one)
        // 'AND' by default, so changing to 'OR' by setting false here
      }
}
