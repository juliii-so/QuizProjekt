import { ErgebnisService } from './ergebnis.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from './person';

@Component({
    selector: 'app-ergebnis',

    templateUrl: './ergebnis.component.html',

    styleUrls: ['./ergebnis.component.css']
})
export class ErgebnisComponent implements OnInit {
    title = 'quiz-app';
    private highscoreListe$: Observable<Person[]>;
    constructor(private ergebnisService: ErgebnisService) {}
    ngOnInit() {
        this.highscoreListe$ = this.ergebnisService.getHighscoreListe();
        this.highscoreListe$.subscribe(() => this.aktualisieren());
    }
    async aktualisieren() {}
}
