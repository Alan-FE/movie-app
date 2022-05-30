import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-multi-item-carousel',
  templateUrl: './multi-item-carousel.component.html',
  styleUrls: ['./multi-item-carousel.component.scss']
})
export class MultiItemCarouselComponent {
  @Input() movies: any[] = [];
  @Input() genre: string = '';

  responsiveOptions;

  constructor() { 
      this.responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 5,
            numScroll: 1
        },
        {
          breakpoint: '992px',
          numVisible: 4,
          numScroll: 1
        },
        {
            breakpoint: '768px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '560px',
            numVisible: 1,
            numScroll: 1
        }
    ];
  };

}
