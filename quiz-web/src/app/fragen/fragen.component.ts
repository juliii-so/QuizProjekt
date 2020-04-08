import { ButtonService } from './button.service';
import { AntwortService } from './antwort.service';
import { Component, OnInit } from '@angular/core';
import { ErgebnisService } from './../ergebnis/ergebnis.service';
import { FragenService } from './fragen.service';

@Component({
    selector: 'app-fragen',

    templateUrl: './fragen.component.html',

    styleUrls: ['./fragen.component.css']
})
export class FragenComponent implements OnInit {
    static fragenService;
    title = 'quiz-app';

    constructor(
        private fragenService: FragenService,
        private antwortService: AntwortService,
        private buttonService: ButtonService
    ) {}
    async ngOnInit() {
        await this.alleFragenErzeugen();
    }
    async alleFragenErzeugen() {
        const fragenObjekt = document.createElement('div');
        fragenObjekt.classList.add('alleFragen');
        // Anzahl der Fragen beliebig, sobald DB voller
        const anzahlInDB = await this.fragenService.getAnzahl();
        const schonAufSeite: number[] = [];
        for (let i = 0; i < 8; i++) {
            // Zufällige Frage bekommen, die noch nicht auf Seite ist
            let index: number;
            do {
                index = Math.floor(Math.random() * anzahlInDB);
            } while (schonAufSeite.includes(index));
            // aus Datenbank abfragen mit HTTP GET
            fragenObjekt.appendChild(
                this.frageErzeugen(
                    await this.fragenService.getFrage(index),
                    i + 1
                )
            );
            schonAufSeite.push(index);
        }
        document
            .getElementById('PlatzhalterFuerFragen')
            .appendChild(fragenObjekt);
    }

    public frageErzeugen(frageAusDB, id) {
        const frageUndAntworten = document.createElement('div');
        frageUndAntworten.classList.add('frage' + id);
        const ueberschrift = document.createElement('h2');
        ueberschrift.textContent = 'Frage: ' + id;
        frageUndAntworten.appendChild(ueberschrift);
        const frage = document.createElement('p');
        frage.textContent = frageAusDB.frage;
        frageUndAntworten.appendChild(frage);
        const buttons = new Array(4);
        for (let i = 0; i < 4; i++) {
            frageUndAntworten.appendChild(
                this.neuerAntwortButton(
                    id,
                    i,
                    frageAusDB.antworten[i],
                    frageAusDB.richtig
                )
            );
        }
        return frageUndAntworten;
    }
    neuerAntwortButton(
        idFrage: number,
        idAntwort: number,
        antwort: string,
        richtig: number
    ) {
        const button = document.createElement('button');
        button.textContent = antwort;
        button.type = 'submit';
        const as = this.antwortService;
        button.onclick = function() {
            as.frageBeantwortet(idFrage, richtig, idAntwort + 1);
        };
        button.classList.add(
            'frage' + idFrage,
            'antwort' + (idAntwort + 1) + 'frage' + idFrage,
            'deaktiviert',
            'antwort'
        );
        // Damit zu Beginn deaktiviert und man erst Namen eingeben muss
        button.setAttribute('disabled', 'true');
        return button;
    }
}
