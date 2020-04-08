import { ErgebnisService } from './../ergebnis.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from './../person';

@Component({
    selector: 'app-persoenlich',

    templateUrl: './persoenlich.component.html',

    styleUrls: ['./persoenlich.component.css']
})
export class PersoenlichComponent implements OnInit {
    aktuellerSpieler$: Observable<Person>;
    aktuellerSpieler: Person;
    constructor(private ergebnisService: ErgebnisService) {}
    ngOnInit() {
        this.aktuellerSpieler$ = this.ergebnisService.getAktuellerSpieler();
        this.aktuellerSpieler$.subscribe(() => this.aktualisieren());
        this.ergebnisService.aktualisiereDaten();
    }
    async aktualisieren() {
        this.aktuellerSpieler$.subscribe(value => {
            this.aktuellerSpieler = value;
        });
    }
    getAktuellerSpieler() {
        this.aktuellerSpieler$.subscribe((spieler: Person) => {
            this.aktuellerSpieler = spieler;
        });
    }
}
