import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
    selector: 'app-details',
    templateUrl: './details.page.html',
    styleUrls: ['./details.page.scss'],
    standalone: true,
    imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class DetailsPage implements OnInit {

    pokemon: any;

    constructor(private activatedRoute: ActivatedRoute,
        private pokemonService: PokemonService) { }

    ngOnInit() {
        const name = this.activatedRoute.snapshot.paramMap.get('name');
        this.pokemonService.getPokemonDetails(name).subscribe(data => {
            this.pokemon = data;
        });
    }

    addFavorite(name: string) {
        this.pokemonService.addFavorite(name);
    }

    removeFavorite(name: string) {
        this.pokemonService.removeFavorite(name);
    }

}
