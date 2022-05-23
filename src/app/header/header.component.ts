import { Component, OnInit } from '@angular/core';

import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  genres: any[] = [];

  constructor( private movieService: MovieService ) { }

  ngOnInit(): void {
    this.movieService.getGenres().subscribe((res: any) =>{
      this.genres = res.genres;
      console.log(res)
    });
  };

  selectGenre(id: number) {
    this.movieService.getMoviesByGenre(id).subscribe((res) => {
      console.log(res);
    });
  }

}
