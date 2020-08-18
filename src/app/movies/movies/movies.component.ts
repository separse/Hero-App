import { Component, OnInit } from '@angular/core';
import { DataMovie } from '../data-movie';
import { MovieDataService } from '../movie-data.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  initials: DataMovie[];
  selected: DataMovie;
  firstPage = true;

  constructor(private servMovieData: MovieDataService) { }

  ngOnInit(): void {
    this.servMovieData.initailData.subscribe(res => this.initials = res);
  }

  onClick(item): void {
    this.selected = item;
  }

  addMovie(): void {
    this.selected = null;
    this.firstPage = false;
  }

  newMovie(e): void {
    this.servMovieData.addMovie(e).subscribe(res => console.log(res));
    this.firstPage = true;
  }

}
