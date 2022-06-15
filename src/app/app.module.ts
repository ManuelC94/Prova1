import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaProdottiComponent } from './lista-prodotti/lista-prodotti.component';
import { DettagliProdottiComponent } from './dettagli-prodotti/dettagli-prodotti.component';
import { AlertsProdottiComponent } from './alerts-prodotti/alerts-prodotti.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaProdottiComponent,
    DettagliProdottiComponent,
    AlertsProdottiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
