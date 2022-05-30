import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../service/local-storage.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  favoriteMovies: any[] = [];
  key: string = 'favorites';
  moviesPerPage: number = 10;
  hide: boolean = false;

  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.favoriteMovies = this.localStorageService.readData(this.key);
  };

  clearAll() {
    this.favoriteMovies = [];
    this.localStorageService.removeData(this.key);
    this.favoriteMovies.length > 10 ? this.hide = false : this.hide = true;
  };
  
  loadMore() {
    if(this.favoriteMovies.length - this.moviesPerPage >= 10) {
      this.moviesPerPage+=10;
    } else {
      this.moviesPerPage+= this.favoriteMovies.length - this.moviesPerPage;
      this.hide = true;
    };
  };
}
