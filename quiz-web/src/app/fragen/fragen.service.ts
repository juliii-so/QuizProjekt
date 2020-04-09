import { ErgebnisService } from './../ergebnis/ergebnis.service';
import { NamensService } from './../begruessung/namens.service';
import { PostDatenSpieler } from './postDatenSpieler';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { Frage, FrageI } from './frage';
import { FrageGemischt } from './frageGemischt';
@Injectable()
export class FragenService {
    private urlFrage = '/getFrage';
    private urlAnzahl = '/getAnzahl';
    constructor(
        private _http: HttpClient,
        private namensService: NamensService,
        private ergebnisService: ErgebnisService
    ) {}

    async getFrage(index: number) {
        let params = new HttpParams();
        params = params.append('index', index.toString());

        return await this._http
            .get<FrageI>(this.urlFrage, { params: params })
            .pipe(
                map((requestDaten) => {
                    return new FrageGemischt(
                        new Frage(
                            requestDaten.frage,
                            requestDaten.antwortR,
                            requestDaten.antwortF1,
                            requestDaten.antwortF2,
                            requestDaten.antwortF3
                        )
                    );
                })
            )
            .toPromise();
    }
    async getAnzahl() {
        return await this._http.get<number>(this.urlAnzahl).toPromise();
    }
}
