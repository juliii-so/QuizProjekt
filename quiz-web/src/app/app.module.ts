import { ErgebnisComponent } from './ergebnis/ergebnis.component';
import { BegruessungComponent } from './begruessung/begruessung.component';
import { FragenComponent } from './fragen/fragen.component';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent,
        FragenComponent,
        BegruessungComponent,
        ErgebnisComponent
    ],

    imports: [BrowserModule, HttpClientModule, HttpClientJsonpModule],

    providers: [],

    bootstrap: [AppComponent]
})
export class AppModule {}
