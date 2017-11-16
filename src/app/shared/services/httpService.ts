import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {data} from './data';

@Injectable()
export class HttpService {
    baseUrl="";
    constructor(private http:HttpClient){}
    getData():Promise<any> {
        return Promise.resolve(data);
    }

    GetRequest(arg:any):Promise<any> {
        return new Promise((resolve,reject)=>{
            this.http.get(arg.url).subscribe(data=>{
                //console.log("data direct",data);
                resolve(data['data']);
            },err=>{
                console.log("error occured during data fetch");
                reject(err);
            })
        })
    }
}