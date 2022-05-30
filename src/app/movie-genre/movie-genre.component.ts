import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-movie-genre',
  templateUrl: './movie-genre.component.html',
  styleUrls: ['./movie-genre.component.scss']
})
export class MovieGenreComponent implements OnInit {
  id: any;
  movieGenre: any[] = [];
  title: any;
  page: number = 1;
  totalItems: number = 1;
  itemsPerPage: number = 20;
  loaded: boolean = false;

  constructor( private route: ActivatedRoute,
               private movieService: MovieService ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(( params: ParamMap ) =>{
      this.id = Number(params.get('id'));
      let genre: any = params.get('name');
      this.title = this.movieService.transformWord(genre);
      this.data(this.id, this.page);
    });
  };

  data(id: number, page: number) {
    this.totalItems = 1;
    this.movieService.getMoviesByGenre(id, page).subscribe((movies: any) => {
      this.movieGenre = movies.results;
      this.totalItems = 10000;
      this.loaded = true;
    });
  };

  onPageChange(value: number) {
    this.page = value;
    this.movieGenre = [];
    console.log(value);
    this.movieService.getMoviesByGenre(this.id, value).subscribe((movies: any) =>{
      this.movieGenre = movies.results;
  });

  };

}
