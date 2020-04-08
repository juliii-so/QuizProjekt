export interface PersonI {
    name: string;
    anzahlFragen: number;
    anzahlRichtig: number;
    punkte: number;
}
export class Person implements PersonI {
    name: string;
    anzahlFragen: number;
    anzahlRichtig: number;
    punkte: number;
    constructor(
        name: string,
        anzahlFragen: number,
        anzahlRichtig: number,
        punkte: number
    ) {
        this.name = name;
        this.anzahlFragen = anzahlFragen;
        this.anzahlRichtig = anzahlRichtig;
        this.punkte = punkte;
    }
}
