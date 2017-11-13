import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DatePickerComponent } from './date-picker.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [DatePickerComponent],
    exports: [DatePickerComponent]
})
export class DatePickerModule { }