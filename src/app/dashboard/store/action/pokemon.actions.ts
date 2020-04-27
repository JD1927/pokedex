import { createAction, props } from '@ngrx/store';
import { Pokemon } from 'src/app/shared/models/pokemon.model';

export const loadPokemons = createAction(
  '[Pokemon] Load Pokemons'
);

export const loadPokemonsSuccess = createAction(
  '[Pokemon] Load Pokemons Success',
  props<{ data: Pokemon[] }>()
);

export const loadPokemonsFailure = createAction(
  '[Pokemon] Load Pokemons Failure',
  props<{ error: any }>()
);

export const updatePokemons = createAction(
  '[Pokemon] Load Pokemon Detail Success',
  props<{ pokemonList: Pokemon[] }>()
);

