import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TextTransformPipe } from '../pipe/text-transform.pipe';

import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  genres: any[] = [];
  categories: string[] = ['Popular', 'Now Playing', 'Upcoming', 'Top rated'];
  value: string = '';
  show: boolean = false;
  @ViewChild('inpt') input: any;

  constructor( private renderer: Renderer2, 
               private movieService: MovieService,
               private router: Router,
               private textTransform: TextTransformPipe ) {
                  this.renderer.listen(
                    'window', 'click',(e:Event)=>{
                      if(e.target!== this.input.nativeElement){
                          this.show = false;
                      };
                    }
                  );
                }

  ngOnInit(): void {
    this.movieService.getGenres().subscribe((res: any) =>{
      this.genres = res.genres;
    });
  };

  onFocus() {
    this.show = true;
  };

  search() {
    if(this.value !== '') {
      let tranformedValue = this.textTransform.transform(this.value);
      this.router.navigate([`/search/${tranformedValue}`]);
      this.value = '';
    }
  };

}
