import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RESOURCE_URL, GET_POKEMON, GET_POKEMON_DETAIL } from 'src/app/shared/global.constans';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemonList(): Observable<any> {
    return this.http.get(`${RESOURCE_URL}/${GET_POKEMON}`);
  }

  getPokemonDetail(id: number): Observable<any> {
    return this.http.get(`${RESOURCE_URL}/${GET_POKEMON_DETAIL}/${id}/`);
  }
}
