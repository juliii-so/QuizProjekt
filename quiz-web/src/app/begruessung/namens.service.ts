import { Injectable } from '@angular/core';

@Injectable()
export class NamensService {
    private aktuellerName;
    constructor() {}
    aktualisiereAktuellenNamen(name: string) {
        this.aktuellerName = name;
    }
    getName() {
        return this.aktuellerName;
    }
}
