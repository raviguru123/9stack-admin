import {Component} from "@angular/core";
import {RedComponentComponent} from "../red-component/red-component.component";
import {GridOptions} from "ag-grid/main";
import {HttpService} from '../../shared';

@Component({
    selector: 'app-my-grid-application',
    templateUrl: './my-grid-application.component.html',
    providers:[HttpService]
})
export class MyGridApplicationComponent {
    gridOptions: GridOptions;
    columnDefs: any[]
    newcolumnDefs:any[];
    newrowData: any[];
    rowData: any[];
    private gridApi;
    private gridColumnApi;

 constructor(private httpservice:HttpService) {
       this.gridOptions = <GridOptions>{}; 

        httpservice.getData().then(data=>{
            this.columnDefs=this.generatecolumn(data[0].data.columns);
            this.rowData=this.parseRow(data[0].data.transaction_traces.transactions);
        },err=>{

        })
    }

    generatecolumn(data:any){
        let columns=[];
        for (let prop in data){
            switch(data[prop].type) { 
                case "search": { 
                    columns.push({
                        suppressSizeToFit:true,
                        headerName:data[prop].name,
                        field:prop,
                    }) 
                   break; 
                }
                case "Dropdown":  
                case "dropdown": { 
                    columns.push({
                        suppressSizeToFit:true,
                        headerName:data[prop].name,
                        field:prop,
                    }) 
                   break; 
                } 
                case "Date": {
                    columns.push({
                        suppressSizeToFit:true,
                        headerName:data[prop].name,
                        field:prop,
                    }) 
                   break;    
                } 
                default: { 
                    columns.push({
                        suppressSizeToFit:true,
                        headerName:data[prop].name,
                        field:prop,
                    })           
                } 
             }
           
        }
        return columns;
    }

    
    parseRow(data){
        let rows=[];
        for(let row of data){
            rows.push(row.fields);
        }
        return rows;
    }



    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        params.api.setRowData(this.rowData);
        // setTimeout(()=>{
        //     params.api.sizeColumnsToFit();
        // },5000);
    }
    
    sizeToFit() {
        this.gridApi.sizeColumnsToFit();
    }
    
    selectAllRows() {
        this.gridOptions.api.selectAll();
    }
}

