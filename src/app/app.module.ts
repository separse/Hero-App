import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

import { ShowMovieComponent } from './movies/show-movie/show-movie.component';
import { AssignmentComponent } from './Hero/assignment/assignment.component';
import { AddMovieComponent } from './movies/add-movie/add-movie.component';
import { EditHeroComponent } from './Hero/edit-hero/edit-hero.component';
import { MoviesComponent } from './movies/movies/movies.component';
import { DetailComponent } from './Hero/detail/detail.component';
import { AddComponent } from './Hero/add/add.component';
import { AppComponent } from './app.component';

import { MovieDataService } from './movies/movie-data.service';
import { AuthHeroService } from './Hero/auth-hero.service';
import { LogDataService } from './movies/log-data.service';
import { LoggingService } from './Hero/logging.service';
import { GoodDirective } from './Hero/good.directive';
import { HeroService } from './Hero/hero.service';


@NgModule({
  declarations: [
    AppComponent,
    AssignmentComponent,
    DetailComponent,
    GoodDirective,
    AddComponent,
    MoviesComponent,
    AddMovieComponent,
    ShowMovieComponent,
    EditHeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatListModule,
    MatCardModule,
    MatCheckboxModule,
    MatSlideToggleModule
  ],
  providers: [
    HeroService,
    LoggingService,
    MovieDataService,
    LogDataService,
    AuthHeroService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
