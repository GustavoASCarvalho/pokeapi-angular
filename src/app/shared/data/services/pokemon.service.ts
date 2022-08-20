import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { Type } from '../models/pokemon/pokemon-type.model';
import { Pokemon, PokemonList } from '../models/pokemon/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  POKE_API_BASE_URL = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) { }

  buscarPokemonPorNomeOuId(parametro: string | number): Observable<Pokemon> {
    const pokemonURL = `${this.POKE_API_BASE_URL}pokemon/${parametro}`;

    return this.http.get<any>(pokemonURL).pipe(
      map((data) => {
        const pokemon: Pokemon = {
          id: data.id,
          name: data.name,
          image: data.sprites.front_default,
          types: data.types.map((type: { type: Type }) => {
            return {
              name: type.type.name,
              url: type.type.url
            };
          }),
          status: {
            hp: data.stats[5].base_stat,
            attack: data.stats[4].base_stat,
            defense: data.stats[3].base_stat,
            speed: data.stats[0].base_stat,
          },
        }
        return pokemon;
      })
    );
  }

  buscarListaPokemons(offset: number = 0, limit: number = 10): Observable<PokemonList> {
    const listaPokemonsURL = `${this.POKE_API_BASE_URL}pokemon?offset=${offset}&limit=${limit}`;

    return this.http.get<any>(listaPokemonsURL).pipe(
      map(data => data.results.map((pokemon: {
        url: string,
        name: string
      }) => {
        console.log(pokemon)
        return {
          ...pokemon
        };
      })),
    );
  }

  buscarStatusPokemonPorNomeOuId(parametro: string | number): Observable<any> {
    const statusPokemonURL = `${this.POKE_API_BASE_URL}pokemon/${parametro}/stats`;

    return this.http.get<any>(statusPokemonURL);
  }
}
