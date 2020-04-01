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
        ErgebnisComponent
    ],

    imports: [
        BrowserModule,
        HttpModule,
        HttpClientModule,
        HttpClientJsonpModule
    ],

    providers: [NamensService, FragenService, ErgebnisService],

    bootstrap: [AppComponent]
})
export class AppModule {}
