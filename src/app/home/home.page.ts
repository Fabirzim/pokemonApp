import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { PokemonService } from '../pokemon.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    standalone: true,
    imports: [IonHeader, IonToolbar, IonTitle, IonContent],
    providers:[PokemonService]
})
export class HomePage implements OnInit {

    pokemons: any[] = [];
    offset = 0;
    limit = 20;

    constructor(private pokemonService: PokemonService) { }

    ngOnInit() {
        this.loadPokemons();
    }

    loadPokemons(event?: any) {
        this.pokemonService.getPokemonList(this.offset, this.limit).subscribe(data => {
            this.pokemons = [...this.pokemons, ...data.results];
            if (event) {
                event.target.complete();
            }
        });
        this.offset += this.limit;
    }
}
