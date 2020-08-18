import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

import { ShowMovieComponent } from './movies/show-movie/show-movie.component';
import { AddMovieComponent } from './movies/add-movie/add-movie.component';
import { AssignmentComponent } from './Hero/assignment/assignment.component';
import { MoviesComponent } from './movies/movies/movies.component';
import { DetailComponent } from './Hero/detail/detail.component';
import { AddComponent } from './Hero/add/add.component';
import { AppComponent } from './app.component';

import { MovieDataService } from './movies/movie-data.service';
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
    ShowMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatListModule,
    MatCardModule,
    MatCheckboxModule
  ],
  providers: [
    HeroService,
    LoggingService,
    MovieDataService,
    LogDataService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
