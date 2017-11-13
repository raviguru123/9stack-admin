import {Component,ViewChild} from '@angular/core';
import {DatePickerComponent} from 'ng2-date-picker';
@Component({
    selector:'date-picker',
    templateUrl:'./date-picker.component.html',
    styleUrls: ['./date-picker.component.scss']
})

export class DatePickerComponent1 {
    @ViewChild('dayPicker') datePicker: DatePickerComponent;
    open() {
            this.datePicker.api.open();
        }
    
        close() {
            this.datePicker.api.close();
        }
}