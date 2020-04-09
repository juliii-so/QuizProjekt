import { ResponsiveService } from './ergebnis/highscore/responsive.service';
import { PersoenlichComponent } from './ergebnis/persoenlich/persoenlich.component';
import { HighscoreComponent } from './ergebnis/highscore/highscore.component';
import { ButtonService } from './fragen/button.service';
import { AntwortService } from './fragen/antwort.service';
import { NamensService } from './begruessung/namens.service';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BegruessungComponent } from './begruessung/begruessung.component';
import { ErgebnisComponent } from './ergebnis/ergebnis.component';
import { ErgebnisService } from './ergebnis/ergebnis.service';
import { FragenComponent } from './fragen/fragen.component';
import { FragenService } from './fragen/fragen.service';

@NgModule({
    declarations: [
        AppComponent,
        FragenComponent,
        BegruessungComponent,
        ErgebnisComponent,
        HighscoreComponent,
        PersoenlichComponent,
    ],

    imports: [
        BrowserModule,
        HttpModule,
        HttpClientModule,
        HttpClientJsonpModule,
    ],

    providers: [
        NamensService,
        FragenService,
        AntwortService,
        ErgebnisService,
        ButtonService,
        ResponsiveService,
    ],

    bootstrap: [AppComponent],
})
export class AppModule {}
