import {Component} from "@angular/core";
import {RedComponentComponent} from "../red-component/red-component.component";
import {GridOptions} from "ag-grid/main";
import "ag-grid-enterprise";
import {HttpService} from '../../shared';
import {HttpParams } from '@angular/common/http';

class HttpArgument {
    url:string;
    params:HttpParams;
}

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
    pagesize=10;
    private gridApi;
    private gridColumnApi;
    
 constructor(private httpservice:HttpService) {
       this.gridOptions = <GridOptions>{
       }; 
       
    //    httpservice.GetRequest({url:'http://adminbff.7pe7.com/api/v1/admin/transactions/?purpose=promo&sortby=created_on&sort_method=desc&credit_type=cash_money'}).then(result=>{
    //     console.log("result come from api",result);
    //    },err=>{
    //     console.log("error occured during data fetch",err);
    //    });

        httpservice.getData().then(data=>{
            this.columnDefs=this.generatecolumn(data[0].data.columns);
            this.rowData=this.parseRow(data[0].data.transaction_traces.transactions);
            
            // this.gridOptions = {
            //     columnDefs:this.columnDefs,
            //     rowData:this.rowData,
            //     enableSorting: true,
            //     isExternalFilterPresent:this.isExternalFilterPresent,
            //     doesExternalFilterPass:this.doesExternalFilterPass,
            // };
        },err=>{

        })
    }


        
    isExternalFilterPresent(){
        return true;
    }
    doesExternalFilterPass(node) {
        console.log("node=",node);
        return true;
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
                        filter:'text',
                        suppressMenu: true
                    }) 
                   break; 
                }
                case "Dropdown":  
                case "dropdown": { 
                    columns.push({
                        headerName:data[prop].name,
                        field:prop,
                        filter: "set",
                        filterParams: {
                          cellHeight: 20,
                          values:data[prop].values,
                          debounceMs: 1000
                        }
                    });
                    console.log("prop",data[prop]);
                   break; 
                } 
                case "Date": {
                    columns.push({
                        suppressSizeToFit:true,
                        headerName:data[prop].name,
                        field:prop,
                        filter: 'date',
                        suppressMenu: true,
                        filterParams: {
                            comparator: function(filterLocalDateAtMidnight, cellValue) {
                                console.log("date filter cllabxk");
                                if(cellValue==undefined || cellValue.length==0){
                                    return -1;
                                }
                                var dateAsString = cellValue;
                                var dateParts = dateAsString.split('/');
                                var cellDate = new Date(Number(dateParts[2]), Number(dateParts[1]) - 1, Number(dateParts[0]));
                
                                if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
                                    return 0;
                                }
                
                                if (cellDate < filterLocalDateAtMidnight) {
                                    return -1;
                                }
                
                                if (cellDate > filterLocalDateAtMidnight) {
                                    return 1;
                                }
                            },
                            nullComparator: {
                                equals: false,
                                lessThan: false,
                                greaterThan: false
                            }
                        }
                    }) 
                   break;    
                } 
                default: { 
                    columns.push({
                        suppressSizeToFit:true,
                        headerName:data[prop].name,
                        field:prop,
                        filter:'text',
                        suppressMenu: true
                    })           
                } 
             }
           
        }
        return columns;
    }


    formatfiletrValue(data:any){
        let params=[];
        for (let prop in data){
            debugger;
            if (data.hasOwnProperty(prop)) {
            switch(data[prop].filterType) { 
                case "number":
                case "text": { 
                    params.push(encodeURIComponent(prop) + '=' + encodeURIComponent(data[prop].filter));
                    break; 
                }
                case "date": {
                    params.push(encodeURIComponent(prop) + '=' +(new Date(data[prop].dateFrom).getTime()));
                    break;    
                } 
                default: { 
                    params.push(encodeURIComponent(prop) + '=' + encodeURIComponent(data[prop].join(',')));
                } 
             }
            }
        }
     return "?" + params.join('&');
    }
    




    parseRow(data){
        let rows=[];
        for(let row of data){
            rows.push(row.fields);
        }
        return rows;
    }

    changedata(column){
        const arg= new HttpArgument();
        arg.url='http://adminbff.7pe7.com/api/v1/admin/transactions/?purpose=promo&sortby=created_on&sort_method=desc';
        arg.url+=this.formatfiletrValue(this.gridApi.getFilterModel());
        this.httpservice.GetRequest(arg).then(result=>{
            console.log("result come from api after filter=",result);
           },err=>{
            console.log("error occured during data fetch",err);
           });
    
        //this.gridApi.setRowData(data);
    }

    clearFilter(){
        this.gridApi.setFilterModel(null);
        this.gridApi.onFilterChanged();
    }

    onPageSizeChanged(newPageSize) {
        var value = document.getElementById("page-size");
        this.gridApi.paginationSetPageSize(Number(newPageSize));
      }

    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        //this.gridColumnApi.paginationGetRowCount()=1000;
        params.api.setRowData(this.rowData);
    }
    
    sizeToFit() {
        this.gridApi.sizeColumnsToFit();
    }
    
    onPaginationPageLoaded(){
        console.log("onPaginationPageLoaded method call");
    }
    selectAllRows() {
        this.gridOptions.api.selectAll();
    }
}

