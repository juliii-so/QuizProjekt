export interface FrageI {
    frage: string;
    antwortR: string;
    antwortF1: string;
    antwortF2: string;
    antwortF3: string;
}
export class Frage implements FrageI {
    frage: string;
    antwortR: string;
    antwortF1: string;
    antwortF2: string;
    antwortF3: string;
    constructor(
        frage: string,
        antwortR: string,
        antwortF1: string,
        antwortF2: string,
        antwortF3: string
    ) {
        this.frage = frage;
        this.antwortR = antwortR;
        this.antwortF1 = antwortF1;
        this.antwortF2 = antwortF2;
        this.antwortF3 = antwortF3;
    }
}
