import { AntwortService } from './antwort.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ButtonService {
    constructor() {}

    public buttonsAnpassen(frage: number, richtig: number, antwort: number) {
        for (
            let i = 1;
            i < document.getElementsByClassName('frage' + frage).length;
            i++
        ) {
            // Farbklassen zuweisen
            document
                .getElementsByClassName('antwort' + i + 'frage' + frage)[0]
                .classList.add(
                    i === richtig ? 'richtig' : 'falsch',
                    i === antwort ? 'gewaehlt' : 'nichtgewaehlt'
                );
            // Button deaktivieren
            this.deaktivieren('antwort' + i + 'frage' + frage);
        }
    }
    public alleAktivieren() {
        for (
            let i = 0;
            i < document.getElementsByClassName('antwort').length;
            i++
        ) {
            document
                .getElementsByClassName('antwort')
                .item(i)
                .removeAttribute('disabled');
            document
                .getElementsByClassName('antwort')
                .item(i)
                .classList.remove('deaktiviert');
            document
                .getElementsByClassName('antwort')
                .item(i)
                .classList.remove('gewaehlt');
            document
                .getElementsByClassName('antwort')
                .item(i)
                .classList.remove('nichtgewaehlt');
            document
                .getElementsByClassName('antwort')
                .item(i)
                .classList.remove('richtig');
            document
                .getElementsByClassName('antwort')
                .item(i)
                .classList.remove('falsch');
        }
    }
    public deaktivieren(idKlasse: string) {
        document
            .getElementsByClassName(idKlasse)
            .item(0)
            .setAttribute('disabled', 'true');
        document
            .getElementsByClassName(idKlasse)
            .item(0)
            .classList.add('deaktiviert');
    }
}
