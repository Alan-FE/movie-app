import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-movie-category',
  templateUrl: './movie-category.component.html',
  styleUrls: ['./movie-category.component.scss']
})
export class MovieCategoryComponent implements OnInit {
  category: any  = '';
  movieCategory: any[] = [];
  title: any = '';
  page: number = 1;
  totalItems: number = 1;
  itemsPerPage: number = 20;
  loaded: boolean = false;

  constructor( private route: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(( params: ParamMap ) =>{
      this.category = params.get('name');
      this.loadData(this.category, this.page);
      var tranformedTitle: string = this.movieService.transformWord(this.category);
      this.title = tranformedTitle;
    });
  };

  loadData(category: string, page: number) {
    this.totalItems = 1;
    this.movieService.getMovieCategory(category, page).subscribe((movies: any) => {
      this.movieCategory = movies.results;
      this.totalItems = 10000;
      this.loaded = true;
    });
  };

  onPageChange(value: number) {
    this.page = value;
    this.movieCategory = [];
    this.movieService.getMovieCategory(this.category, value).subscribe((movies: any) =>{
      this.movieCategory = movies.results;
  });

  };

}
