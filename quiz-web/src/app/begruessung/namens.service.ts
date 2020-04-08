import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class NamensService {
    private namenListe$ = new BehaviorSubject<String[]>([]);
    private url = '/getNamen';
    private aktuellerName = '';
    constructor(private _http: HttpClient) {}
    aktualisiereAktuellenNamen(name: string) {
        this.aktuellerName = name;
    }
    getName() {
        console.log('getName wird aufgerufen: Das ist er ' + this.aktuellerName);
        return this.aktuellerName;
    }
    async aktualisiereNamen() {
        const namenListe = await this.getHttp();
        this.namenListe$.next(namenListe);
    }
    async getHttp() {
        return await this._http.get<String[]>(this.url).toPromise();
    }
    getNamenObservable() {
        return this.namenListe$.asObservable();
    }
}
