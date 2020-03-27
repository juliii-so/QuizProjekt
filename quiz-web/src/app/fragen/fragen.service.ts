import { Frage } from './frage';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class FragenService {
    constructor(private _http: HttpClient) {}
    getFragen() {
        const requestDaten = this._http.get<Frage[]>('/getFragen');

        return requestDaten;
    }

}
