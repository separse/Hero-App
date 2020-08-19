import { Component, OnInit, Input } from '@angular/core';
import { DataMovie } from '../data-movie';
import { MovieDataService } from '../movie-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-show-movie',
  templateUrl: './show-movie.component.html',
  styleUrls: ['./show-movie.component.css']
})
export class ShowMovieComponent implements OnInit {

  selected: DataMovie;
  constructor(
    private servMovieData: MovieDataService,
    private route: ActivatedRoute,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.getMovie();
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
    this.router.navigate(['/home']);
  }

  getMovie(): void {
    const name = this.route.snapshot.params.name;
    this.servMovieData.getSelected(name).subscribe(res => this.selected = res);
  }

  onEdit(): void {
    this.router.navigate(
      ['/movies', this.selected.name, 'edit'],
      {queryParams: {name: this.selected.year}, fragment: 'edit'});
  }
}
