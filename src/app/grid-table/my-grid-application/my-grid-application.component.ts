import {Component} from "@angular/core";
import {RedComponentComponent} from "../red-component/red-component.component";
import {GridOptions} from "ag-grid/main";

@Component({
    selector: 'app-my-grid-application',
    templateUrl: './my-grid-application.component.html'
})
export class MyGridApplicationComponent {
    gridOptions: GridOptions;
    columnDefs: any[]
    rowData: any[];

    constructor() {
        this.gridOptions = <GridOptions>{};
        this.columnDefs = [
            {headerName: "Make", field: "make"},
            {headerName: "Model", field: "model", colId: "square",
            width: 175,cellRendererFramework: RedComponentComponent},
            {headerName: "Price", field: "price"}
        ];

        this.rowData = [
            {make: "Toyota", model: "Celica", price: 35000},
            {make: "Ford", model: "Mondeo", price: 32000},
            {make: "Porsche1", model: "Boxter", price: 72000},
            {make: "Toyota1", model: "Celica", price: 35000},
            {make: "Ford1", model: "Mondeo", price: 32000},
            {make: "Porsche2", model: "Boxter", price: 72000},
            {make: "Toyota2", model: "Celica", price: 35000},
            {make: "Ford2", model: "Mondeo", price: 32000},
            {make: "Porsche3", model: "Boxter", price: 72000},
            {make: "Toyota3", model: "Celica", price: 35000},
            {make: "Ford3", model: "Mondeo", price: 32000},
            {make: "Porsche3", model: "Boxter", price: 72000},
            {make: "Toyota", model: "Celica", price: 35000},
            {make: "Ford", model: "Mondeo", price: 32000},
            {make: "Porsche1", model: "Boxter", price: 72000},
            {make: "Toyota1", model: "Celica", price: 35000},
            {make: "Ford1", model: "Mondeo", price: 32000},
            {make: "Porsche2", model: "Boxter", price: 72000},
            {make: "Toyota2", model: "Celica", price: 35000},
            {make: "Ford2", model: "Mondeo", price: 32000},
            {make: "Porsche3", model: "Boxter", price: 72000},
            {make: "Toyota3", model: "Celica", price: 35000},
            {make: "Ford3", model: "Mondeo", price: 32000},
            {make: "Porsche3", model: "Boxter", price: 72000}
        ]
    }

    onGridReady(params) {
        console.log("ongrid ready function call");
        params.api.sizeColumnsToFit();
    }
    onModelUpdated(){
        console.log("onModelUpdated function call");
    }
    selectAllRows() {
        this.gridOptions.api.selectAll();
    }
}

