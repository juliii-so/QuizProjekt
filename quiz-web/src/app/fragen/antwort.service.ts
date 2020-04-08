import { ButtonService } from './button.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NamensService } from './../begruessung/namens.service';
import { ErgebnisService } from './../ergebnis/ergebnis.service';
import { PostDatenSpieler } from './postDatenSpieler';
@Injectable()
export class AntwortService {
    private url = '/speichereAntwort';
    constructor(
        private _http: HttpClient,
        private namensService: NamensService,
        private ergebnisService: ErgebnisService,
        private buttonService: ButtonService,
        private namenService: NamensService
    ) {}

    public frageBeantwortet(frage: number, richtig: number, antwort: number) {
        this.antwortSenden(antwort === richtig);
        this.buttonService.buttonsAnpassen(frage, richtig, antwort);
    }

    private async antwortSenden(richtig: boolean) {
        // Soll aufgerufen werden, sobald eine Frage beantwortet wurde
        const postDaten = new PostDatenSpieler(
            this.namensService.getName(),
            richtig
        );
        await this._http
            .post<PostDatenSpieler>(this.url, postDaten)
            .toPromise();
        this.ergebnisService.aktualisiereDaten();
        this.namenService.aktualisiereNamen();
    }
}
