import { Frage } from './frage';
export class FrageGemischt {
    frage: string;
    richtig: number;
    antworten: string[];
    constructor(frage: Frage) {
        switch (Math.floor(Math.random() * 4) + 1) {
            case 1:
                this.frage = frage.frage;
                this.richtig = 1;
                this.antworten = [
                    frage.antwortR,
                    frage.antwortF1,
                    frage.antwortF2,
                    frage.antwortF3,
                ];
                break;

            case 2:
                this.frage = frage.frage;
                this.richtig = 2;
                this.antworten = [
                    frage.antwortF1,
                    frage.antwortR,
                    frage.antwortF2,
                    frage.antwortF3,
                ];
                break;
            case 3:
                this.frage = frage.frage;
                this.richtig = 3;
                this.antworten = [
                    frage.antwortF1,
                    frage.antwortF2,
                    frage.antwortR,
                    frage.antwortF3,
                ];
                break;
            case 4:
                this.frage = frage.frage;
                this.richtig = 4;
                this.antworten = [
                    frage.antwortF1,
                    frage.antwortF2,
                    frage.antwortF3,
                    frage.antwortR,
                ];
                break;
        }
    }
}
