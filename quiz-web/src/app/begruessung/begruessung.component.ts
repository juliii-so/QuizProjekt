import { Observable } from 'rxjs';
import { ButtonService } from './../fragen/button.service';
import { NamensService } from './namens.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-begruessung',

    templateUrl: './begruessung.component.html',

    styleUrls: ['./begruessung.component.css'],
})
export class BegruessungComponent implements OnInit {
    title = 'quiz-app';
    namen: String[];
    namen$: Observable<String[]>;
    constructor(
        private namensService: NamensService,
        private buttonService: ButtonService
    ) {}
    ngOnInit() {
        this.namen$ = this.namensService.getNamenObservable();
        this.namen$.subscribe(() => this.aktualisieren());
        this.namensService.aktualisiereNamen();
    }
    nameSpeichern(neuerName: string) {
        if (neuerName) {
            this.namensService.aktualisiereAktuellenNamen(neuerName);
            if (!this.namen.includes(neuerName)) {
                this.namen.push(neuerName);
            }
            // Button aktivieren
            this.buttonService.alleAktivieren();
        }
    }
    async aktualisieren() {
        this.namen$.subscribe((value) => {
            this.namen = value;
        });
    }
    getNamen() {
        this.namen$.subscribe((namen: String[]) => {
            this.namen = namen;
        });
    }
}
