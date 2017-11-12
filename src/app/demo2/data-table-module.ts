import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DataTableRouting} from './data-table-routing';
import {DataTableDemoComponent} from './data-table-demo2';

@NgModule({
    imports:[
        CommonModule,
        DataTableRouting
    ],
    declarations:[
        DataTableDemoComponent
    ]
})

export class DataTableModule {

}



