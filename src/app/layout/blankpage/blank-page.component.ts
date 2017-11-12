import { Component, OnInit } from '@angular/core';
import {data} from './data';
@Component({
    selector: 'app-blank-page',
    template:'<ng2-smart-table [settings]="settings" [source]="data"></ng2-smart-table>',
    styleUrls: ['./blank-page.component.scss']
})
export class BlankPageComponent implements OnInit {
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

    ngOnInit() {
    }
}
