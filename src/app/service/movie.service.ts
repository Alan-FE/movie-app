import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  key = environment.apiKey;

  constructor(private http: HttpClient) { }

  getMovies() {
    let req1 = this.http.get(`https://api.themoviedb.org/3/movie/popular?api_key=${this.key}`);
    let req2 = this.http.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${this.key}`);
    return forkJoin([req1, req2]);
  };

  getGenres() {
    return this.http.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${this.key}`);
  };

  getMoviesByGenre(id: number) {
    return this.http.get(`https://api.themoviedb.org/3/discover/movie?api_key=${this.key}&with_genres=${id}`);
  };
}
