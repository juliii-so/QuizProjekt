import { Component } from '@angular/core';
import { NamensService } from './../begruessung/namens.service';

@Component({
    selector: 'app-ergebnis',

    templateUrl: './ergebnis.component.html',

    styleUrls: ['./ergebnis.component.css'],
})
export class ErgebnisComponent {
    constructor(public namensService: NamensService) {}
}
