import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable }     from 'rxjs/Observable';

import { Menu } from './menu';

import 'rxjs/add/operator/catch';

@Injectable()
export class MenuService {
    private _SERVICE_URL:string = 'http://localhost:3000/service/menu';

    constructor (private _http:Http){}

    getMenuConfig():Observable<Menu> {
        return this._http.get(this._SERVICE_URL)
        .map((res:Response) => {
            return res.json().data || {};
        })
        .catch((error) => {
            let errorMsg = (error)? error.message: error.status ? `${error.message}- ${error.status}`: 'Server error';
            return Observable.throw(errorMsg);
        });
        
    }
}