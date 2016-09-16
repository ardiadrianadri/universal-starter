import { Injectable, Optional }     from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable }     from 'rxjs/Observable';

import { Menu } from './menu';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

export class MenuServiceConfig {
    public url;
}

@Injectable()
export class MenuService {
    private _SERVICE_URL:string;

    constructor (private _http:Http, @Optional() config:MenuServiceConfig){
        if (config){
            this._SERVICE_URL = config.url;
        }
    }

    getMenuConfig():Observable<Menu> {
        let result:Observable<Menu>;

        if (this._SERVICE_URL){
            result = this._http.get(this._SERVICE_URL)
                .map((res:Response) => {
                    return res.json() || {};
                })
                .catch((error) => {
                    let errorMsg = (error)? error.message: error.status ? `${error.message}- ${error.status}`: 'Server error';
                    return Observable.throw(errorMsg);
                });
        } else {
            throw new Error('The url of the service is not configured');
        }

        return result;
        
    }
}