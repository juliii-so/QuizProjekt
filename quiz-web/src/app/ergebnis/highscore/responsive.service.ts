import { Injectable, OnInit } from '@angular/core';
import { Body } from '@angular/http/src/body';
import { htmlAstToRender3Ast } from '@angular/compiler/src/render3/r3_template_transform';
@Injectable()
export class ResponsiveService {
    constructor() {
        this.displayGroesseAnpassen();
    }
    displayGroesseAnpassen() {
        let value = '';
        if (innerWidth < 800) {
            value = 'none';
        } else {
            value = '';
        }

        const elements = document.getElementsByClassName(
            'unwichtig'
        ) as HTMLCollectionOf<HTMLElement>;
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.display = value;
        }
    }
}
