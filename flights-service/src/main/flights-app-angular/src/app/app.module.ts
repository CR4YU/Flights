import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainContentComponent } from './main-content/main-content.component';
import { FinderComponent } from './main-content/finder/finder.component';
import { AirportsComponent } from './main-content/finder/airports/airports.component';
import { FlightsComponent } from './main-content/finder/flights/flights.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from "@angular/material/select";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainContentComponent,
    FinderComponent,
    AirportsComponent,
    FlightsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
