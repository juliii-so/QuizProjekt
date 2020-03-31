import { Component, OnInit } from '@angular/core';
import { FrageGemischt } from './frageGemischt';
import { FragenService } from './fragen.service';

@Component({
    selector: 'app-fragen',

    templateUrl: './fragen.component.html',

    styleUrls: ['./fragen.component.css']
})
export class FragenComponent implements OnInit {
    private fragenService: FragenService;
    title = 'quiz-app';

    public static frageBeantwortet(
        frage: number,
        richtig: number,
        antwort: number
    ) {
        console.log('Das ist richtig ' + richtig);
        console.log('Das wurde geantwortet ' + antwort);
        if (antwort === richtig) {
            // punkte(true) an Server
        } else {
            // punkte(false) an server
        }
        for (let i = 1; i <= 4; i++) {
            document
                .getElementsByClassName('antwort' + i + 'frage' + frage)[0]
                .classList.add(i === richtig ? 'richtig' : 'falsch');
            document
                .getElementsByClassName('antwort' + i + 'frage' + frage)[0]
                .classList.add(i === antwort ? 'gewaehlt' : 'nichtgewaehlt');
            document
                .getElementsByClassName('antwort' + i + 'frage' + frage)[0]
                .setAttribute('disabled', 'true');
        }
        console.log('Fragen fertig korrigiert');
    }
    constructor(fragenService: FragenService) {
        this.fragenService = fragenService;
    }
    async ngOnInit() {
        console.log('0 oninit wird ausgeführt');
        await this.alleFragenErzeugen();
    }
    async alleFragenErzeugen() {
        const fragenObjekt = document.createElement('div');
        fragenObjekt.classList.add('alleFragen');
        // Anzahl der Fragen beliebig, sobald DB voller
        for (let i = 0; i < 8; i++) {
            console.log('1 eine Frage soll erzeugt werden mit index: ' + i);
            // aus Datenbank abfragen mit HTTP GET

            fragenObjekt.appendChild(
                this.frageErzeugen(await this.fragenService.getFrage(i), i + 1)
            );
        }
        document
            .getElementById('PlatzhalterFuerFragen')
            .appendChild(fragenObjekt);
        console.log('Fragen fertig erzeugt');
    }

    public frageErzeugen(frageAusDB, id) {
        console.log('2 Diese Frage soll erzeugt werden(Object) ' + frageAusDB);
        console.log('3 Die Frage soll lauten' + frageAusDB.frage);
        const frageUndAntworten = document.createElement('div');
        frageUndAntworten.classList.add('frage' + id);
        const ueberschrift = document.createElement('h2');
        ueberschrift.textContent = 'Frage: ' + id;
        frageUndAntworten.appendChild(ueberschrift);
        console.log('4 Überschrift wurde erzeugt');
        const frage = document.createElement('p');
        frage.textContent = frageAusDB.frage;
        frageUndAntworten.appendChild(frage);
        console.log('5 Frage wurde eingefügt');
        const buttons = new Array(4);
        for (let i = 0; i < 4; i++) {
            buttons[i] = document.createElement('button');
            buttons[i].textContent = frageAusDB.antworten[i];
            buttons[i].type = 'submit';
            buttons[i].onclick = function() {
                FragenComponent.frageBeantwortet(id, frageAusDB.richtig, i + 1);
            };
            buttons[i].classList.add(
                'frage' + id,
                'antwort' + (i + 1) + 'frage' + id
            );
            console.log('6 Button wurde erstellt' + buttons[i]);

            frageUndAntworten.appendChild(buttons[i]);
        }
        console.log('7 Eine Frage wurde fertig');
        return frageUndAntworten;
    }
}
