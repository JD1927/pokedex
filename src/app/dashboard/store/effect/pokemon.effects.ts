import { PokemonService } from './../../services/pokemon.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as PokemonActions from '../action/pokemon.actions';
import { Pokemon } from 'src/app/shared/models/pokemon.model';
import { setImage } from 'src/app/shared/global.constans';



@Injectable()
export class PokemonEffects {

  loadPokemons$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(PokemonActions.loadPokemons),
      concatMap(() => {
        return this.pokemonService.getPokemonList().pipe(
          map((data: any) => {
            const { results } = data;
            return PokemonActions.loadPokemonsSuccess(
              { data: this.addPokemonDetails(results) }
            );
          }),
          catchError(error => of(PokemonActions.loadPokemonsFailure({ error }))));
      })
    );
  });

  constructor(
    private actions$: Actions,
    private pokemonService: PokemonService
  ) { }

  addPokemonDetails(results: Pokemon[]): Pokemon[] {
    let index = 1;
    results.forEach(d => {
      d.id = index++;
      d.image = setImage(d.id);
    });
    return [...results];
  }

}
