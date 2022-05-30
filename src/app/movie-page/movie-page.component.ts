import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Subscription } from 'rxjs';
import { MovieService } from '../service/movie.service';

import { Modal } from 'bootstrap';
import { LocalStorageService } from '../service/local-storage.service';

declare var window: any;

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss']
})
export class MoviePageComponent implements OnInit, OnDestroy {
  id: any;
  movieDetails: any;
  movieRecommended: any;
  movieSimilar: any;
  subscription?: Subscription;
  baseUrl: string = 'https://www.youtube.com/embed/';
  url: string = '';
  ratingArray : any[] = [];
  loaded: boolean = false;

  genre1: string = 'Recommended movies';
  genre2: string = 'Similar movies';

  modal: Modal | undefined;
  showHeart: boolean = false;

  constructor( private route: ActivatedRoute, 
               private movieService: MovieService,
               private localStorageService: LocalStorageService ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(( params: ParamMap ) =>{
      this.id = Number(params.get('id'));
      this.movieDetails = this.movieRecommended = this.movieSimilar = undefined;
      this.showHeart = false;
      this.loadDetails(this.id);
    });
    this.ratingArray = Array(5).fill(false);
  };

  loadDetails(id: number): void {
    this.subscription = this.movieService.getMovieDetails(id).subscribe((movie: any) => {
     this.movieDetails = movie[0];
     this.movieRecommended = movie[1].results
     this.movieSimilar = movie[2].results;
     this.loaded = true;
     this.localStorageService.visitedMovies(this.movieDetails);

     let json: any = localStorage.getItem('favorites');
     let favoritesArray: any[] = JSON.parse(json) ? JSON.parse(json) : [];
 
     for(let movie in favoritesArray) {
       if(favoritesArray[movie].id === this.id) {
        this.showHeart = true;
       };
     };
   });
  }

  playTrailer(): void {
    this.movieService.getMovieTrailer(this.movieDetails.id).subscribe((videos: any) => {
     this.url = this.baseUrl + videos.results[0].key;
     this.modal = new window.bootstrap.Modal(document.getElementById("modal"), {
       backdrop: 'static',
       keyboard: false
     });
     this.modal?.show();
    });
  };

  close(): void {
    this.modal?.hide();
    this.url = '';
  }

  showStars(i: number): string {
    let rating = this.movieDetails.vote_average;
    if (rating / 2 >= i + 1) {
      return 'fas fa-star';
    } else if (rating / 2 > i && rating / 2 < i + 1) {
      return 'fas fa-star-half-alt';
    } else {
      return 'far fa-star';
    }
  };

  addToFavorite(): void {
    this.showHeart = !this.showHeart;
    this.localStorageService.addOrRemove(this.movieDetails);
  };

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  };

}
