import { NamensService } from './../begruessung/namens.service';
import { PostDatenSpieler } from './postDatenSpieler';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Person } from './person';

@Injectable()
export class ErgebnisService {
    private highscoreListe$ = new BehaviorSubject<Person[]>([]);
    private url = '/getErgebnis';
    private postErgebnis;
    constructor(
        private _http: HttpClient,
        private namensService: NamensService
    ) {}

    async frageBeantwortet(richtig: boolean) {
        console.log('E1 Ergebnis ist eingetroffen, wird jetzt verarbeitet');
        // Soll aufgerufen werden, sobald eine Frage beantowrtet wurde
        // Soll die neue Auswertung als Observabke bereitstellen und aktuallisieren
        const postDaten = new PostDatenSpieler(
            this.namensService.getName(),
            richtig
        );
        console.log('E2 POSTDATEN: ' + postDaten);
        this._http
            .post(this.url, postDaten)
            .toPromise()
            .then(data => {
                this.postErgebnis = data;
            });
        console.log('E3 POSTERGEBNIS: ' + this.postErgebnis);
        this.highscoreListe$.next(this.postErgebnis);
        console.log('E4 Observable wurde aktualiesert');
    }

    getHighscoreListe() {
        return this.highscoreListe$.asObservable();
    }
}
