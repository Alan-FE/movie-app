import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { forkJoin, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  key: string;

  constructor(private http: HttpClient) {
    this.key = '844b50e559aa60c1aaa9697b2be52919';
  }

  getMovies(): Observable<any> {
    let req1 = this.http.get(`https://api.themoviedb.org/3/movie/popular?api_key=${this.key}`);
    let req2 = this.http.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${this.key}`);
    return forkJoin([req1, req2]);
  };

  getGenres(): Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${this.key}`);
  };

  getMoviesByGenre(id: number, page: number): Observable<any> {
    const params = new HttpParams()
    .set('with_genres', `${id}`)
    .set('page',`${page}`);
    return this.http.get(`https://api.themoviedb.org/3/discover/movie?api_key=${this.key}`, {params: params});
  };

  getMovieDetails(id: number): Observable<any> {
    let req1 = this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${this.key}&append_to_response=credits`);
    let req2 = this.http.get(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${this.key}`);
    let req3 = this.http.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${this.key}`);

    return forkJoin([req1, req2, req3]);
  };

  getMovieTrailer(id: number): Observable<any> {
    return this.http.get(`http://api.themoviedb.org/3/movie/${id}/videos?api_key=${this.key}`);
  };

  getMovieCategory(category: string, page: number): Observable<any> {
    const params = new HttpParams()
    .set('page',`${page}`);
    let tranformedWord = category.split('-').join('_').toLowerCase();
    return this.http.get(`https://api.themoviedb.org/3/movie/${tranformedWord}?api_key=${this.key}`, {params: params});
  };

  searchMovies(keyword: string): Observable<any> {
    const params = new HttpParams()
    .set('query', `${keyword}`)
    return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.key}`, {params: params});
  };

  transformWord(value: string): string {
    let newValue = value.split('-').join(' ');
    return newValue;
  };
  
}
