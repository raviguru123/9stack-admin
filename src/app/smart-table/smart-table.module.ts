import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Ng2SmartTableModule} from 'ng2-smart-table';
import {SmartTableComponent} from './smart-table.component'
import {SmartRoutingModule} from './smart.routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DatePickerModule } from '../shared';




@NgModule({
imports:[
    FormsModule,
    SmartRoutingModule,
    Ng2SmartTableModule,
    CommonModule,
    DatePickerModule
],
declarations:[
    SmartTableComponent]
})

export class SmartTableModule {

}