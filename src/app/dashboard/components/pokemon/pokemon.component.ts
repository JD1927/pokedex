import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Pokemon } from 'src/app/shared/models/pokemon.model';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonState } from '../../store/reducer/pokemon.reducer';
import { updatePokemons } from './../../store/action/pokemon.actions';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  @Input() pokemon: Pokemon;
  @Input() pokemonList: Pokemon[];
  loading: boolean;
  types: any[];

  constructor(
    public store: Store<PokemonState>,
    private pokemonService: PokemonService,
  ) { }

  ngOnInit(): void {
    this.getPokemonDetail();
  }

  getPokemonDetail(): void {
    this.loading = true;
    this.pokemonService.getPokemonDetail(this.pokemon.id).subscribe(
      (detail) => {
        const { id } = this.pokemon;
        this.pokemon = { ...this.pokemon, detail };
        this.types = detail.types;
        const updatePokemonList = this.pokemonList.map((poke) => {
          return poke.id === id ? { ...poke, detail } : { ...poke };
        });
        this.store.dispatch(updatePokemons({ pokemonList: updatePokemonList }));
        this.loading = false;
      },
      (error) => this.loading = false,
    );
  }




}
