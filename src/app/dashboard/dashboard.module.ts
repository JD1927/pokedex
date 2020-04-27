import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PokemonIdPipe } from '../shared/pipes/pokemon-id.pipe';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { PokemonEffects } from './store/effect/pokemon.effects';
import * as fromPokemon from './store/reducer/pokemon.reducer';


@NgModule({
  declarations: [
    DashboardComponent,
    PokemonListComponent,
    PokemonComponent,
    PokemonIdPipe,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    StoreModule.forFeature(fromPokemon.pokemonFeatureKey, fromPokemon.reducer),
    EffectsModule.forFeature([PokemonEffects]),
  ]
})
export class DashboardModule { }
