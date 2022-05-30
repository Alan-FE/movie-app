import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnChanges {
  @Input() itemsPerPage: any;
  @Input() totalItems: any;
  @Output() pageChange = new EventEmitter<number>();

  allPages: number[] = [];
  displayPages: number[] = [];
  activePage: any;

  constructor() { }

  ngOnChanges(): void {
    this.allPages = [];
    this.displayPages = [];
    let totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    this.setArrayOfPages(totalPages);
    this.activePage = 1;
  }

  setArrayOfPages(pageNo: number): void {
    if(pageNo > 0) {
      for(let i = 1; i <= pageNo; i++) {
        this.allPages.push(i);
      };
      let arrLength = this.allPages.length;
      let endIndex = pageNo <= 5 ? arrLength : arrLength = 5;
      this.displayPages = this.allPages.slice(0, endIndex);
    };
  };

  changePage(val: number): void {
    this.activePage = val;
    let noPages: number = this.allPages.length;
    let startPage: number = 0;
    let endPage: number = 5;
    if(val >=5) { 
      startPage = (noPages - val > 1) ? val - 3 : noPages - 5; 
      endPage = (noPages - val > 2) ? val + 2 : noPages;
    };
    this.displayPages = this.allPages.slice(startPage, endPage);
    this.pageChange.emit(this.activePage);
  };

  previous(): void {
    this.changePage(Math.max(1,this.activePage - 1));
  };

  next(): void {
    this.changePage(Math.min(this.allPages.length, this.activePage + 1));
  };

  get isFirst(): boolean {
    return this.activePage === 1;
  };

  get isLast(): boolean {
    return this.activePage === this.allPages.length;
  };

}
