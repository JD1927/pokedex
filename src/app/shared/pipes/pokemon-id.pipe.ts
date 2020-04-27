import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonId'
})
export class PokemonIdPipe implements PipeTransform {

  transform(value: number): string {
    const id = value.toString();

    switch (id.length) {
      case 1:
        return `#000${id}`;
      case 2:
        return `#00${id}`;
      default:
        return `#0000`;
    }
  }

}
