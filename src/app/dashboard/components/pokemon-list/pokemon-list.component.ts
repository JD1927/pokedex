import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Subscription, fromEvent } from 'rxjs';
import { Pokemon } from 'src/app/shared/models/pokemon.model';
import { Store } from '@ngrx/store';
import { PokemonState } from '../../store/reducer/pokemon.reducer';
import { map, debounceTime } from 'rxjs/operators';
import { loadPokemons } from '../../store/action/pokemon.actions';
import { AppState } from 'src/app/app.module';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemonState$: Subscription = new Subscription();
  keyUpSearch$: Subscription = new Subscription();
  @ViewChild('taskSearch') taskSearch: ElementRef;
  pokemonList: Pokemon[];

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.getPokemonList();
  }

  getPokemonList(): void {
    this.store.dispatch(loadPokemons());
    this.pokemonState$ = this.store.select(state => state.pokemon.pokemon).pipe(
      map((pokemonList: Pokemon[]) => this.pokemonList = pokemonList)
    ).subscribe();
  }

  onSearchChange(): void {
    this.keyUpSearch$ = fromEvent(this.taskSearch.nativeElement, 'keyup').pipe(
      debounceTime(1000),
      map((e: any) => e.target.value),
    ).subscribe((search) => this.searchFilter(search));
  }

  searchFilter(name: string): void {
    if (name) {
      this.pokemonList = this.pokemonList.filter(pokemon => pokemon.name === name);
    }
  }

  trackByMethod(index: number, el: any): number {
    return el.id;
  }

}
