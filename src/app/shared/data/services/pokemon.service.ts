import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  POKE_API_BASE_URL = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) { }

  buscarPokemonPorNomeOuId(parametro: string | number): Observable<any> {
    const pokemonURL = `${this.POKE_API_BASE_URL}pokemon/${parametro}`;

    return this.http.get<any>(pokemonURL);
  }

  buscarListaPokemons(offset: number = 0, limit: number = 10): Observable<any> {
    const listaPokemonsURL = `${this.POKE_API_BASE_URL}pokemon?offset=${offset}&limit=${limit}`;

    return this.http.get<any>(listaPokemonsURL);
  }

  buscarStatusPokemonPorNomeOuId(parametro: string | number): Observable<any> {
    const statusPokemonURL = `${this.POKE_API_BASE_URL}pokemon/${parametro}/stats`;

    return this.http.get<any>(statusPokemonURL);
  }
}
