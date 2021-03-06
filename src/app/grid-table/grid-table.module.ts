import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AgGridModule} from "ag-grid-angular/main";
import { FormsModule } from '@angular/forms';
import {MyGridApplicationComponent} from "./my-grid-application/my-grid-application.component";
import {RedComponentComponent} from "./red-component/red-component.component";
import {GridRoutingModule} from './grid.routing.module';
import {GridComponent} from './grid-table.component'
import {HttpClientModule} from '@angular/common/http';
@NgModule({ imports: [
    FormsModule,
    HttpClientModule,
    AgGridModule.withComponents(
        [RedComponentComponent]
        ),
    GridRoutingModule
    ],
   declarations: [
    GridComponent,
    MyGridApplicationComponent,
    RedComponentComponent
    ],
    providers: []
})

export class GridModule {
}
