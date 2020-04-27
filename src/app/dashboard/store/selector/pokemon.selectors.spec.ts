import * as fromPokemon from '../reducer/pokemon.reducer';
import { selectPokemonState } from './pokemon.selectors';

describe('Pokemon Selectors', () => {
  it('should select the feature state', () => {
    const result = selectPokemonState({
      [fromPokemon.pokemonFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
