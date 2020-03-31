import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { Frage, FrageI } from './frage';
import { FrageGemischt } from './frageGemischt';
@Injectable()
export class FragenService {
    constructor(private _http: HttpClient) {}

    getFragen() {
        console.log('HTTP Reequest in Fragenservice abgesendet');
        const requestDaten = this._http.get<Frage[]>('/getFragen');
        console.log('REQUEST DATEN: ' + requestDaten);
        return requestDaten;
    }
 /*   getFrage(index: number): FrageGemischt {
        console.log('F1 HTTP Request wird in Fragenservice wird abgesendet');
        let params = new HttpParams();
        params = params.append('index', index.toString());

        console.log(
            'F2 HTTP Request in Fragenservice hat Parameter vorbereitet' +
                params
        );
        let fragegemischt: FrageGemischt;
        this._http
            .get<FrageI>('/getFrage', { params: params })
            .pipe(
                tap(requestDaten =>
                    console.log('F3 REQUEST DATEN: ' + requestDaten)
                ),
                map(requestDaten => {
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
            .subscribe(frage => {
                console.log(
                    'F4 Dies ist die Frage des Frageobjekt, das zurückgegeben werden soll' +
                        frage.frage
                );
                fragegemischt = frage;
                return frage;
            });
        console.log(
            'FF Nicht richtig return aber jetzt nochmal: ' + fragegemischt.frage
        );
        return fragegemischt;
    }*/

    async getFrage(index: number) {
        console.log(
            'TEST F1 HTTP Request wird in Fragenservice wird abgesendet'
        );
        let params = new HttpParams();
        params = params.append('index', index.toString());

        console.log(
            'TEST F2 HTTP Request in Fragenservice hat Parameter vorbereitet' +
                params
        );
        return await this._http
            .get<FrageI>('/getFrage', { params: params })
            .pipe(
                tap(requestDaten =>
                    console.log('F3 REQUEST DATEN: ' + requestDaten)
                ),
                map(requestDaten => {
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
}
