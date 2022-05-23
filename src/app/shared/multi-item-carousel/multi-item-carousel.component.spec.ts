import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiItemCarouselComponent } from './multi-item-carousel.component';

describe('MultiItemCarouselComponent', () => {
  let component: MultiItemCarouselComponent;
  let fixture: ComponentFixture<MultiItemCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiItemCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiItemCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
