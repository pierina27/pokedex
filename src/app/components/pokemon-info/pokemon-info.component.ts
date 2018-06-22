import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonesService, PokemonesRules } from '../../services/pokemones.service';

@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.css']
})
export class PokemonInfoComponent implements OnInit {
  pokemon:PokemonesRules;
  constructor(private paramsRoute: ActivatedRoute, private pokemonService: PokemonesService) {

    this.paramsRoute.params.subscribe(params =>{
      this.pokemon = pokemonService.obtenerPokemon(params.id);
    })
   }

  ngOnInit() {
  }

}
