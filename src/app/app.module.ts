import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material-module';
import { AngularFireModule } from '@angular/fire';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ShowMovieComponent } from './movies/show-movie/show-movie.component';
import { EditMovieComponent } from './movies/edit-movie/edit-movie.component';
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
    EditHeroComponent,
    EditMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
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
