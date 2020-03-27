import { FragenService } from './fragen.service';
import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';

@Component({
    selector: 'app-fragen',

    templateUrl: './fragen.component.html',

    styleUrls: ['./fragen.component.css']
})
export class FragenComponent implements OnInit {
    public static fragenJson;
    private fragenService: FragenService;
    title = 'quiz-app';

    public static frageBeantwortet(frage: number, antwort: number) {
        const richtig = FragenComponent.fragenJson[frage]['richtig'];
        console.log(frage);
        console.log(antwort);
        if (antwort === richtig) {
            // punkte(true) an Server
        } else {
            // punkte(false) an server
        }
        for (let i = 0; i < 4; i++) {
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
    }
    constructor(fragenService: FragenService) {
        this.fragenService = fragenService;
    }
    ngOnInit() {
        FragenComponent.fragenJson = this.fragenService.getFragen();
        this.alleFragenErzeugen();
    }

    public alleFragenErzeugen() {
        // aus Datenbank abfragen mit HTTP GET
        const fragen = FragenComponent.fragenJson;

        const fragenObjekt = document.createElement('div');
        fragenObjekt.classList.add('alleFragen');
        for (let i = 0; i < fragen.length; i++) {
            fragenObjekt.appendChild(this.frageErzeugen(fragen[i]));
        }
        document
            .getElementById('PlatzhalterFuerFragen')
            .appendChild(fragenObjekt);
    }

    public frageErzeugen(frageJson) {
        const frageUndAntworten = document.createElement('div');

        frageUndAntworten.classList.add(frageJson['id']);

        const ueberschrift = document.createElement('h2');
        ueberschrift.textContent = 'Frage: ' + (frageJson['id'] + 1);
        frageUndAntworten.appendChild(ueberschrift);

        const frage = document.createElement('p');
        frage.textContent = frageJson['frage'];
        frageUndAntworten.appendChild(frage);

        const buttons = new Array(4);
        for (let i = 0; i < 4; i++) {
            buttons[i] = document.createElement('button');
            buttons[i].textContent = frageJson['antwort'][i];
            buttons[i].type = 'submit';
            buttons[i].onclick = function() {
                FragenComponent.frageBeantwortet(frageJson['id'], i);
            };
            buttons[i].classList.add(
                'antwort' + [i],
                'frage' + frageJson['id'],
                'antwort' + [i] + 'frage' + frageJson['id']
            );
            console.log(buttons[i]);

            frageUndAntworten.appendChild(buttons[i]);
        }
        console.log(frageUndAntworten);
        return frageUndAntworten;
    }
}
