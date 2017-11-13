import {Injectable} from '@angular/core';
import {data} from './data';

@Injectable()
export class HttpService {
    baseUrl="";
    getData():Promise<any> {
        return Promise.resolve(data);
    }
}