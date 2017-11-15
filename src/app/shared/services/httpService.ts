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

    GetRequest(url):Promise<any> {
        return new Promise((resolve,reject)=>{
            this.http.get(url).subscribe(data=>{
                resolve(data['results']);
            },err=>{
                console.log("error occured during data fetch");
                reject(err);
            })
        })
    }
}