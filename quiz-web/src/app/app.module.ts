import { FragenService } from './fragen/fragen.service';
import { ErgebnisComponent } from './ergebnis/ergebnis.component';
import { BegruessungComponent } from './begruessung/begruessung.component';
import { FragenComponent } from './fragen/fragen.component';
import { BrowserModule } from '@angular/platform-browser';

import { HttpModule } from '@angular/http';
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

    imports: [
        BrowserModule,
        HttpModule,
        HttpClientModule,
        HttpClientJsonpModule
    ],

    providers: [FragenService],

    bootstrap: [AppComponent]
})
export class AppModule {}
