import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssignmentComponent } from './Hero/assignment/assignment.component';
import { AuthHeroGuard } from './Hero/auth-hero.guard';
import { AddComponent } from './Hero/add/add.component';
import { DetailComponent } from './Hero/detail/detail.component';
import { EditHeroComponent } from './Hero/edit-hero/edit-hero.component';
import { MoviesComponent } from './movies/movies/movies.component';
import { AddMovieComponent } from './movies/add-movie/add-movie.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { ShowMovieComponent } from './movies/show-movie/show-movie.component';

const routes: Routes = [
  // Hero App
  // {path: '', component: AssignmentComponent},
  // {path: 'home', component: AssignmentComponent},
  // {path: 'add', component: AddComponent},
  // {path: 'heroes/:name', component: DetailComponent},
  // {path: 'heroes/:name/edit', component: EditHeroComponent, canActivate: [AuthHeroGuard]}
  // Movie App
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: MoviesComponent},
  {path: 'add', component: AddMovieComponent},
  {path: 'movies/:name', component: ShowMovieComponent},
  {path: 'movies/:name/edit', component: EditMovieComponent, canActivate: [AuthHeroGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
