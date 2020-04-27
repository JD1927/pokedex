import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPokemon from '../reducer/pokemon.reducer';

export const selectPokemonState = createFeatureSelector<fromPokemon.State>(
  fromPokemon.pokemonFeatureKey
);
