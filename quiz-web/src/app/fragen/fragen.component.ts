import { NamensService } from './../begruessung/namens.service';
import { Component, OnInit } from '@angular/core';
import { AntwortService } from './antwort.service';
import { ButtonService } from './button.service';
import { FragenService } from './fragen.service';

@Component({
    selector: 'app-fragen',

    templateUrl: './fragen.component.html',

    styleUrls: ['./fragen.component.css'],
})
export class FragenComponent implements OnInit {
    static fragenService;
    title = 'quiz-app';
    private schonAufSeite: number[] = [];
    constructor(
        private fragenService: FragenService,
        private antwortService: AntwortService,
        private buttonService: ButtonService,
        private namensService: NamensService
    ) {}
    async ngOnInit() {
        this.neueFrage();
    }
    async neueFrage() {
        //alte Frage entfernen
        const element = document.getElementById('PlatzhalterFuerFragen');
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }

        const fragenObjekt = document.createElement('div');
        fragenObjekt.classList.add('Frage');
        const anzahlInDB = await this.fragenService.getAnzahl();

        // Zufällige Frage bekommen, die noch nicht auf Seite ist
        let index: number;
        if (this.schonAufSeite.length >= anzahlInDB) {
            fragenObjekt.appendChild(this.alleGespielt());
            this.schonAufSeite = [];
        } else {
            do {
                index = Math.floor(Math.random() * anzahlInDB);
            } while (this.schonAufSeite.includes(index));
            // aus Datenbank abfragen mit HTTP GET
            fragenObjekt.appendChild(
                this.frageErzeugen(
                    await this.fragenService.getFrage(index),
                    this.schonAufSeite.length + 1
                )
            );
            this.schonAufSeite.push(index);
        }
        document
            .getElementById('PlatzhalterFuerFragen')
            .appendChild(fragenObjekt);
    }
    public alleGespielt() {
        const frageUndAntworten = document.createElement('div');
        frageUndAntworten.textContent =
            'Du hast alle Fragen durchgespielt. ' +
            'Wechsele den Spieler oder verbessere dich in den alten Fragen';
        return frageUndAntworten;
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
        let button = document.createElement('button');
        button.textContent = antwort;
        // button.type = 'submit';
        const as = this.antwortService;
        button.onclick = function () {
            as.frageBeantwortet(idFrage, richtig, idAntwort + 1);
        };
        button.classList.add(
            'frage' + idFrage,
            'antwort' + (idAntwort + 1) + 'frage' + idFrage,
            'antwort'
        );
        // Damit zu Beginn deaktiviert und man erst Namen eingeben muss
        if (this.namensService.getName() === '') {
            button = this.buttonService.deaktivierenButton(button);
        }
        return button;
    }
}
