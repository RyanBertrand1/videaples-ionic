import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    private paramsData: any;

    constructor() {
    }

    setParams(data) {
        this.paramsData = data;
    }

    getParams() {
        return this.paramsData
    }
}
