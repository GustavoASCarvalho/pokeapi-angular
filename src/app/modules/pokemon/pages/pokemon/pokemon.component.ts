import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, concatMap, debounceTime, mergeScan, of, Subject } from 'rxjs';
import { Pokemon } from 'src/app/shared/data/models/pokemon/pokemon.model';
import { PokemonService } from 'src/app/shared/data/services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  input$ = new Subject<string>()
  offset$ = new BehaviorSubject<number>(0);
  pokemon$ = this.offset$.pipe(
    concatMap((value: number) => value !== 0 ? this.pokemonService.buscarPokemonPorNomeOuId(value) : of(null)),
  )
  textoDeBusca$ = this.input$
    .pipe(
      debounceTime(300),
    )

  pokemons: Pokemon[] = [];
  pokemonsFiltrados: Pokemon[] = [];
  todosOsPokemons: Pokemon[] = [];
  limit: number = 16;

  constructor(private pokemonService: PokemonService) {
    for (let i = 1; i <= 151; i++) {
      this.pokemonService.buscarPokemonPorNomeOuId(i).subscribe(data => {
        this.todosOsPokemons.push(data);
      })
    }
  }

  ngOnInit(): void {
    this.textoDeBusca$.subscribe(value => {
      this.filtro(value);
    })
    this.pokemon$.subscribe(data => {
      data ? this.pokemons.push(data) : null;
      this.filtro();
    });
    this.carregarMais();
  }

  busca(value: string) {
    this.input$.next(value);
  }

  carregarMais() {
    for (let i = 0; i < this.limit; i++) {
      if (this.offset$.value < 151) {
        this.offset$.next(this.offset$.value + 1);
      }
    }
  }

  filtro(value?: string) {
    let values: string[] = value ? value.toLocaleLowerCase().split(' ') : [''];
    if (values) {
      this.pokemonsFiltrados = this.todosOsPokemons.filter(pokemon => {
        let nome = pokemon.name.toLocaleLowerCase();
        let tipo = pokemon.types.map(tipo => tipo.name.toLocaleLowerCase());
        let resultado = false;
        values.forEach(value => {
          if (nome.includes(value)) {
            resultado = true;
          }
          tipo.forEach(tipo => {
            if (tipo.includes(value)) {
              resultado = true;
            }
          })
        })
        return resultado;
      })
    } else {
      this.pokemonsFiltrados = this.pokemons;
    }
  }
}
