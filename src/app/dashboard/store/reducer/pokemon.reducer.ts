import { createReducer, on } from '@ngrx/store';
import { Pokemon } from 'src/app/shared/models/pokemon.model';
import * as PokemonActions from '../action/pokemon.actions';

export const pokemonFeatureKey = 'pokemon';

export interface PokemonState {
  pokemon: Pokemon[];
  error?: any;
}

export const initialState: PokemonState = {
  pokemon: undefined,
  error: undefined,
};


export const reducer = createReducer(
  initialState,

  on(PokemonActions.loadPokemons, state => state),
  on(PokemonActions.loadPokemonsSuccess, (state, action) => {
    return {
      ...state,
      pokemon: [...action.data],
    };
  }),
  on(PokemonActions.loadPokemonsFailure, (state, action) => {
    return {
      ...state,
      pokemon: [],
      error: { ...action.error },
    };
  }),
  on(PokemonActions.updatePokemons, (state, action) => {
    const updatePokemonList = state.pokemon.map((pokemon: Pokemon) => {
      const update: Pokemon = action.pokemonList.find((p) => p.id === pokemon.id);
      return update ? { ...update } : { ...pokemon };
    });
    return {
      ...state,
      pokemon: updatePokemonList
    };
  }),

);
