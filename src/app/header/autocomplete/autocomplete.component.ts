import { Component, Input, OnChanges, SimpleChanges, ViewContainerRef } from '@angular/core';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnChanges {
  @Input() value: string = '';
  movieList: any[] = [];

  constructor( private movieService: MovieService,
               private viewContainerRef: ViewContainerRef ) {
                 const injector = this.viewContainerRef.injector;
                 console.log(injector)
               }

  ngOnChanges(changes: SimpleChanges): void {
    let enteredValue: string = changes['value'].currentValue;
      if(enteredValue !== '') {
      this.movieService.searchMovies(enteredValue).subscribe((response: any) => {
        this.movieList = response.results;
      });
    };
  };

}
