import { Injectable } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(private toastr: ToastrService) {}


addOrRemove(movie: any):void {  
  let isExist: boolean = false;
  let json: any = localStorage.getItem('favorites');
  let favoritesArray: any[] = JSON.parse(json) ? JSON.parse(json) : [];
  
    for(let i = 0; i < favoritesArray.length; i++) {

      if(favoritesArray[i].id === movie.id && favoritesArray.length === 1) {
          localStorage.removeItem('favorites');
          isExist = true;
          this.toastr.error('Removed from favorites', 'Notification');
      };

      if(favoritesArray[i].id === movie.id && favoritesArray.length > 1) {
          favoritesArray.splice(i, 1);
          localStorage.setItem('favorites', JSON.stringify(favoritesArray));
          isExist = true;
          this.toastr.error('Removed from favorites', 'Notification');
        };
    };

    if(!isExist) {
        favoritesArray.push(movie);
        localStorage.setItem('favorites', JSON.stringify(favoritesArray));
        this.toastr.success('Added to favorites', 'Notification');
    };
};

visitedMovies(movies: any) {
  let visited: boolean = false;
  let json: any = localStorage.getItem('visited');
  let visitedMovies: any[] = JSON.parse(json) ? JSON.parse(json) : [];

  for(let movie in visitedMovies) {
    if(visitedMovies[movie].id === movies.id) {
        visited = true;
      };
  };

  if(!visited) {
      visitedMovies.push(movies);
      localStorage.setItem('visited', JSON.stringify(visitedMovies));
  };
};

readData(key: string): any {
  let json: any = localStorage.getItem(key);
  let data: any = JSON.parse(json);
  data === null ? data = [] : data;
  return data;
};

removeData(key: string): any {
  localStorage.removeItem(key);
};

}
