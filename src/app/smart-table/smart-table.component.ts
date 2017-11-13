import { Component,OnInit } from '@angular/core';
import { DatePickerModule } from '../shared';
import { LocalDataSource } from 'ng2-smart-table';
import {HttpService} from '../shared';

@Component({
  selector: 'advanced-example-filters',
  templateUrl:'./smart-table.component.html' ,
})

export class SmartTableComponent implements OnInit {
    
  source:LocalDataSource;
  settings={};
  constructor(private httpservice:HttpService){

   this.source = new LocalDataSource();
   this.httpservice.getData().then(data=>{
    //this.source.load(data);
    this.source=data;    
    this.getsetting();
   },err=>{
 
   });
  }

  ngOnInit() {
    
  }

getsetting(){
  this.settings = {
    columns: {
      id: {
        title: 'ID',
      },
      name: {
        title: 'Full Name',
        filter: {
          type: 'list',
          config: {
            selectText: 'Select...',
            list: [
              { value: 'Glenna Reichert', title: 'Glenna Reichert' },
              { value: 'Kurtis Weissnat', title: 'Kurtis Weissnat' },
              { value: 'Chelsey Dietrich', title: 'Chelsey Dietrich' },
            ],
          },
        },
      },
      email: {
        title: 'Email',
        filter: {
          type: 'completer',
          config: {
            completer: {
              data: this.source,
              searchFields: 'email',
              titleField: 'email',
            },
          },
        },
      },
      passed: {
        title: 'Passed',
        filter: {
          type: 'checkbox',
          config: {
            true: 'Yes',
            false: 'No',
            resetText: 'clear',
          },
        },
      },
      last:{
        title:"Test",
        filter:false
      }
    },
};

}









}
