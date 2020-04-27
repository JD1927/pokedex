// Main Podedex Source
export const RESOURCE_URL = 'https://pokeapi.co/api/v2';

// Image Resource
export const IMAGE_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';

export const GET_POKEMON = 'pokemon?limit=25';
export const GET_POKEMON_DETAIL = 'pokemon';

export function setImage(id: number): string {
  return `${IMAGE_URL}/${id}.png`;
}
