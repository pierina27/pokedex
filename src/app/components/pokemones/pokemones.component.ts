import { Component, OnInit } from '@angular/core';

import { PokemonesService, PokemonesRules } from '../../services/pokemones.service';

@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.component.html',
  styleUrls: ['./pokemones.component.css']
})
export class PokemonesComponent implements OnInit {

  pokemones: PokemonesRules[] = [];

  constructor(private _pokemones:PokemonesService) {

   }

  ngOnInit() {
    this.pokemones = this._pokemones.obtenerPokemones();
  }

}
