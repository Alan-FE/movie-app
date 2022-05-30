import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent {
  searchResults: any[] = [];
  keyword: any;
  loaded: boolean = false;

  constructor( private route: ActivatedRoute, private movieService: MovieService ) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.keyword = params.get('name');
      this.searchResults = [];
      this.searchMovie();
    })
  }

  searchMovie() {
    this.movieService.searchMovies(this.keyword).subscribe(( response: any ) => {
      this.searchResults = response.results;
      this.loaded = true;
    });
  }

}
