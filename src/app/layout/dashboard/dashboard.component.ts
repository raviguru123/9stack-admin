import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-dashboard',
    template:'<ng2-smart-table [settings]="settings" [source]="data"></ng2-smart-table>',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
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
}
