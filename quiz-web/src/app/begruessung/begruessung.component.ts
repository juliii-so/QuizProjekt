import { Component } from '@angular/core';

@Component({
    selector: 'app-begruessung',

    templateUrl: './begruessung.component.html',

    styleUrls: ['./begruessung.component.css']
})
export class BegruessungComponent {
    title = 'quiz-app';
    namen = ['Tania', 'Kira', 'Franka'];
    constructor() {}
    nameSpeichern(neuerName: string) {
        console.log(neuerName);
        if (neuerName) {
            this.namen.push(neuerName);
        }
    }
}
