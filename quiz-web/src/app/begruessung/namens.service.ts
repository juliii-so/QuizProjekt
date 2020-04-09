import { ButtonService } from './../fragen/button.service';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs/operators';

@Injectable()
export class NamensService {
    static anzahl = 0;
    private namenListe$ = new BehaviorSubject<String[]>([]);
    private url = '/getNamen';
    private aktuellerName = '';
    constructor(
        private _http: HttpClient,
        private buttonService: ButtonService
    ) {}

    aktualisiereAktuellenNamen(name: string) {
        this.aktuellerName = name;
        if (name !== '') {
            this.buttonService.alleAktivieren();
        }
    }
    getName() {
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
