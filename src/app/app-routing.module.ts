import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MoviePageComponent } from './movie-page/movie-page.component';
import { MovieGenreComponent } from './movie-genre/movie-genre.component';
import { MovieCategoryComponent } from './movie-category/movie-category.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { VisitedComponent } from './visited/visited.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movie/:id/:name', component: MoviePageComponent },
  { path: 'genre/:id/:name', component: MovieGenreComponent },
  { path: 'category/:name', component: MovieCategoryComponent },
  { path: 'search/:name', component: SearchResultsComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'visited', component: VisitedComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
