import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../service/local-storage.service';

@Component({
  selector: 'app-visited',
  templateUrl: './visited.component.html',
  styleUrls: ['./visited.component.scss']
})
export class VisitedComponent implements OnInit {
  visitedMovies: any[] = [];
  key: string = 'visited';
  moviesPerPage: number = 10;
  hide: boolean = false;

  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.visitedMovies = this.localStorageService.readData(this.key);
    this.visitedMovies.length > 10 ? this.hide = false : this.hide = true;
  };

  clear() {
    this.hide = true;
    this.visitedMovies = [];
    this.localStorageService.removeData(this.key);
  };

  loadMore() {
    if(this.visitedMovies.length - this.moviesPerPage >= 10) {
      this.moviesPerPage+=10;
    } else {
      this.moviesPerPage+= this.visitedMovies.length - this.moviesPerPage;
      this.hide = true;
    };
  };

}
