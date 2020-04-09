import { tap, map } from 'rxjs/operators';
import { NamensService } from './../begruessung/namens.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Person, PersonI } from './person';

@Injectable()
export class ErgebnisService {
    private highscoreListe$ = new BehaviorSubject<Person[]>([]);
    private aktuellerSpieler$ = new BehaviorSubject<Person>(
        new Person('', 0, 0, 0)
    );
    private urlHighscore = '/getPlatz';
    private urlSpieler = '/getSpieler';

    constructor(
        private _http: HttpClient,
        private namensService: NamensService
    ) {}

    async aktualisiereDaten() {
        await this.aktualisiereHighscore();
        await this.aktualisiereAktuellerSpieler();
    }
    async aktualisiereHighscore() {
        const highscoreListe = new Array(10);
        for (let platz = 0; platz < 10; platz++) {
            highscoreListe[platz] = await this.getPlatz(platz);
        }
        this.highscoreListe$.next(highscoreListe);
    }
    async aktualisiereAktuellerSpieler() {
        if (
            this.namensService.getName() !== null &&
            this.namensService.getName() !== ''
        ) {
            const spieler = await this.getSpieler(this.namensService.getName());
            this.aktuellerSpieler$.next(spieler);
        }
    }
    async getPlatz(platz: number) {
        let params = new HttpParams();
        params = params.append('platz', platz.toString());
        return await this._http
            .get<PersonI>(this.urlHighscore, { params: params })
            .pipe(
                map((requestDaten) => {
                    return new Person(
                        requestDaten.name,
                        requestDaten.anzahlFragen,
                        requestDaten.anzahlRichtig,
                        requestDaten.punkte
                    );
                })
            )
            .toPromise();
    }
    async getSpieler(name: string) {
        let params = new HttpParams();
        params = params.append('name', name);
        return await this._http
            .get<PersonI>(this.urlSpieler, { params: params })
            .pipe(
                map((requestDaten) => {
                    return new Person(
                        requestDaten.name,
                        requestDaten.anzahlFragen,
                        requestDaten.anzahlRichtig,
                        requestDaten.punkte
                    );
                })
            )
            .toPromise();
    }
    getHighscoreListe() {
        return this.highscoreListe$.asObservable();
    }
    getAktuellerSpieler() {
        return this.aktuellerSpieler$.asObservable();
    }
}
