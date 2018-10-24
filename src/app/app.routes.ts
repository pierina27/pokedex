import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { PokemonesComponent } from './components/pokemones/pokemones.component';
import { PokemonInfoComponent } from './components/pokemon-info/pokemon-info.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'pokemones', component: PokemonesComponent },
    { path: 'pokemon/:id', component: PokemonInfoComponent },
    { path: '**', redirectTo: 'home' },
];

export const POKE_ROUTING = RouterModule.forRoot(routes);
