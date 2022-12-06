import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListUtenteComponent } from './list-utente/list-utente.component';
import { DetailUtenteComponent } from './detail-utente/detail-utente.component';

@NgModule({
  declarations: [
    AppComponent,
    ListUtenteComponent,
    DetailUtenteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
