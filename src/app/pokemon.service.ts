import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PokemonService {
    private apiUrl = 'https://pokeapi.co/api/v2';

    constructor(private http: HttpClient) { }

    getPokemonList(offset: number = 0, limit: number = 20): Observable<any> {
        return this.http.get(`${this.apiUrl}/pokemon?offset=${offset}&limit=${limit}`);
    }

    getPokemonDetails(name: string): Observable<any> {
        return this.http.get(`${this.apiUrl}/pokemon/${name}`);
    }

    getFavorites(): string[] {
        return JSON.parse(localStorage.getItem(FAVORITES_KEY)) || [];
    }

    addFavorite(pokemon: string) {
        const favorites = this.getFavorites();
        favorites.push(pokemon);
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    }

    removeFavorite(pokemon: string) {
        let favorites = this.getFavorites();
        favorites = favorites.filter(fav => fav !== pokemon);
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    }

    isFavorite(pokemon: string): boolean {
        return this.getFavorites().includes(pokemon);
    }
}
