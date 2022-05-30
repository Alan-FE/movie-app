import { Component, Input } from '@angular/core';
import { LocalStorageService } from 'src/app/service/local-storage.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
  @Input() movies: any[] = [];
  @Input() show: boolean = false;

  constructor( private localStorageService: LocalStorageService ) { }

  removeFavorite(i: number, movie: any) {
    this.localStorageService.addOrRemove(movie);
    this.movies.splice(i, 1);
  };

}
