import { ErgebnisService } from './../ergebnis.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from './../person';

@Component({
    selector: 'app-highscore',

    templateUrl: './highscore.component.html',

    styleUrls: ['./highscore.component.css']
})
export class HighscoreComponent implements OnInit {

    highscoreListe$: Observable<Person[]>;
    highscoreListe: Person[];
    constructor(private ergebnisService: ErgebnisService) {}
    ngOnInit() {
        this.highscoreListe$ = this.ergebnisService.getHighscoreListe();
        this.highscoreListe$.subscribe(() => this.aktualisieren());
        this.ergebnisService.aktualisiereDaten();
    }
    async aktualisieren() {
        this.highscoreListe$.subscribe(value => {
            this.highscoreListe = value;
        });
    }
    getHighscoreListe() {
        this.highscoreListe$.subscribe((highscore: Person[]) => {
            this.highscoreListe = highscore;
        });
    }
}
