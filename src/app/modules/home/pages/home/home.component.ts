import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Pokemon } from 'src/app/shared/data/models/pokemon/pokemon.model';
import { PokemonService } from 'src/app/shared/data/services/pokemon.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pokemons: Array<any> = [];
  listaDeIds: Array<number> = [
    1,
    4,
    7,
  ];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.gerarListaDePokemons();
  }

  gerarListaDePokemons() {
    this.listaDeIds.forEach(id => {
      this.pokemonService.buscarPokemonPorNomeOuId(id).subscribe(
        data => {
          this.pokemons.push(data);
        }
      );
    })
  }
}
