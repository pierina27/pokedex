import { Injectable } from '@angular/core';

export interface PokemonesRules{
  id: number;
  nombre: string;
  imagen:string;
  tipo:string;
  bio:string;
}

@Injectable({
  providedIn: 'root'
})
export class PokemonesService {
  pokemones: PokemonesRules[] = [
  	{
  		"id":0,
  		"nombre":"Charmander",
  		"imagen":"001.png",
  		"tipo":"Planta",
  		"bio":"Bulbasaur es fácil verle echándose una siesta al sol. La semilla que tiene en el lomo va creciendo cada vez más a medida que absorbe los rayos del sol."
  	},
  	{
  		"id":1,
  		"nombre":"Pikachu",
  		"imagen":"002.png",
  		"tipo":"Fuego",
  		"bio":"La llama que tiene en la punta de la cola arde según sus sentimientos. Llamea levemente cuando está alegre y arde vigorosamente cuando está enfadado."
  	},
  	{
  		"id":2,
  		"nombre":"Growlite",
  		"imagen":"003.png",
  		"tipo":"Agua",
  		"bio":"El caparazón de Squirtle no le sirve de protección únicamente. Su forma redondeada y las hendiduras que tiene le ayudan a deslizarse en el agua y le permiten nadar a gran velocidad."
  	},
  	{
  		"id":3,
  		"nombre":"Purrloin",
  		"imagen":"004.png",
  		"tipo":"Elétrico",
  		"bio":"Cada vez que un Pikachu se encuentra con algo nuevo, le lanza una descarga eléctrica. Cuando se ve alguna baya chamuscada, es muy probable que sea obra de un Pikachu, ya que a veces no controlan la intensidad de la descarga."
		},
   	{
  		"id":6,
  		"nombre":"Bulbasaur",
  		"imagen":"007.png",
  		"tipo":"Elétrico",
  		"bio":"Cada vez que un Pikachu se encuentra con algo nuevo, le lanza una descarga eléctrica. Cuando se ve alguna baya chamuscada, es muy probable que sea obra de un Pikachu, ya que a veces no controlan la intensidad de la descarga."
		},	{
  		"id":7,
  		"nombre":"Pikachu",
  		"imagen":"008.png",
  		"tipo":"Elétrico",
  		"bio":"Cada vez que un Pikachu se encuentra con algo nuevo, le lanza una descarga eléctrica. Cuando se ve alguna baya chamuscada, es muy probable que sea obra de un Pikachu, ya que a veces no controlan la intensidad de la descarga."
		},{
  		"id":8,
  		"nombre":"Pikachu",
  		"imagen":"009.png",
  		"tipo":"Elétrico",
  		"bio":"Cada vez que un Pikachu se encuentra con algo nuevo, le lanza una descarga eléctrica. Cuando se ve alguna baya chamuscada, es muy probable que sea obra de un Pikachu, ya que a veces no controlan la intensidad de la descarga."
		},{
  		"id":9,
  		"nombre":"Pikachu",
  		"imagen":"010.png",
  		"tipo":"Elétrico",
  		"bio":"Cada vez que un Pikachu se encuentra con algo nuevo, le lanza una descarga eléctrica. Cuando se ve alguna baya chamuscada, es muy probable que sea obra de un Pikachu, ya que a veces no controlan la intensidad de la descarga."
		},
		
		
  ];

  
  constructor() {
    
  }

  obtenerPokemones(){
    return this.pokemones;
  }

  obtenerPokemon(id:number){
	return this.pokemones.find(i => i.id == id);
	}
	
	buscarPokemon(terminoPokemon:string){
		terminoPokemon.toLocaleLowerCase();
		return this.pokemones.filter(word => word.nombre.indexOf(terminoPokemon) > 0);
  }


}
