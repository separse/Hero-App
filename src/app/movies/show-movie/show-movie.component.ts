import { Component, OnInit, Input } from '@angular/core';
import { DataMovie } from '../data-movie';
import { MovieDataService } from '../movie-data.service';

@Component({
  selector: 'app-show-movie',
  templateUrl: './show-movie.component.html',
  styleUrls: ['./show-movie.component.css']
})
export class ShowMovieComponent implements OnInit {

  @Input() selected: DataMovie;
  constructor(private servMovieData: MovieDataService) { }

  ngOnInit(): void {
  }

  toggleLike(): void {
    this.servMovieData.updateMovie(this.selected).subscribe(res => console.log(res));
    if (this.selected.like) {
      this.selected.like = false;
    } else {
      this.selected.like = true;
    }
  }

  onDelete(): void {
    this.servMovieData.deleteMovie(this.selected).subscribe(res => console.log(res));
  }
}
