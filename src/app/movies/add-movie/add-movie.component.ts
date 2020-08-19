import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataMovie } from '../data-movie';
import { MovieDataService } from '../movie-data.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  // @Output() emitMovie = new EventEmitter<DataMovie>();
  name: string;
  year: Date;
  like: boolean;

  constructor(private serveMovieData: MovieDataService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const newMovie = new DataMovie();
    newMovie.like = this.like;
    newMovie.name = this.name;
    newMovie.year = this.year;
    // this.emitMovie.emit(newMovie);
    this.serveMovieData.addMovie(newMovie).subscribe(res => console.log(res));
  }
}
