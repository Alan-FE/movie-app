import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CarouselModule } from 'primeng/carousel';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MultiItemCarouselComponent } from './shared/multi-item-carousel/multi-item-carousel.component';
import { MoviePageComponent } from './movie-page/movie-page.component';
import { TextTransformPipe } from './pipe/text-transform.pipe';
import { SafeUrlPipe } from './pipe/safe-url.pipe';
import { MovieGenreComponent } from './movie-genre/movie-genre.component';
import { MovieCategoryComponent } from './movie-category/movie-category.component';
import { MovieCardComponent } from './shared/movie-card/movie-card.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { VisitedComponent } from './visited/visited.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AutocompleteComponent } from './header/autocomplete/autocomplete.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { PaginationComponent } from './shared/pagination/pagination.component';
import { ShortenPipe } from './pipe/shorten.pipe';
import { CommonModule } from '@angular/common';
import { RuntimePipe } from './pipe/runtime.pipe';
import { LimitPipe } from './pipe/limit.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MultiItemCarouselComponent,
    MoviePageComponent,
    TextTransformPipe,
    SafeUrlPipe,
    MovieGenreComponent,
    MovieCategoryComponent,
    MovieCardComponent,
    FavoritesComponent,
    VisitedComponent,
    PageNotFoundComponent,
    AutocompleteComponent,
    SearchResultsComponent,
    PaginationComponent,
    ShortenPipe,
    RuntimePipe,
    LimitPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    CarouselModule,
    DialogModule,
    ButtonModule
  ],
  providers: [TextTransformPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
