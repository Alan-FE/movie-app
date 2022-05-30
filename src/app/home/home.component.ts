import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  popularMovies: any;
  topRated: any;
  subscription?: Subscription;
  loaded: boolean = false;

  genre1: string = '';
  genre2: string = '';
  
  constructor( private movieService: MovieService ) { }

  ngOnInit(): void {
    this.subscription = this.movieService.getMovies().subscribe((movies: any) =>{
      this.popularMovies = movies[0].results;
      this.topRated = movies[1].results;
      this.genre1 = 'Popular movies';
      this.genre2 = 'Top rated movies';
      this.loaded = true;
    });
  };

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  };

}
