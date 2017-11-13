import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {DpDatePickerModule} from 'ng2-date-picker';
import { DatePickerComponent1 } from './date-picker.component';

@NgModule({
    imports: [
        CommonModule,
        DpDatePickerModule,
        RouterModule
    ],
    declarations: [DatePickerComponent1],
    exports: [DatePickerComponent1]
})
export class DatePickerModule { }