import { Injectable } from '@angular/core';
import { IEquipment } from './equipment';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class EquipmentService{
    private _equipmentUrl = 'api/equipment/equipment.json';

    constructor(private _http: Http){}

    getEquipment(): Observable<IEquipment[]> {
        return this._http.get(this._equipmentUrl)
            .map((response: Response) => <IEquipment[]> response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            ._catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}