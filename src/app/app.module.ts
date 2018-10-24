import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleTagManager } from 'angulartics2/gtm';

//Servicios
import { PokemonesService } from './services/pokemones.service';

//Rutas
import { POKE_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { PokemonesComponent } from './components/pokemones/pokemones.component';
import { PokemonInfoComponent } from './components/pokemon-info/pokemon-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PokemonesComponent,
    PokemonInfoComponent
  ],
  imports: [
    BrowserModule,
    POKE_ROUTING,
    Angulartics2Module.forRoot([ Angulartics2GoogleTagManager ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
