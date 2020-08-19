import { Component, OnInit } from '@angular/core';
import { DataMovie } from '../movies/data-movie';
import { MovieDataService } from '../movies/movie-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {

  name: string;
  year: Date;
  like = false;
  selected;

  constructor(
    private serveMovieData: MovieDataService,
    private route: ActivatedRoute,
    private router: Router
    ) {}

  ngOnInit(): void {
    const name = this.route.snapshot.params.name;
    this.getSelected(name);
  }

  getSelected(name): void {
    this.serveMovieData.getSelected(name).subscribe(res => this.selected = res);
  }

  onSubmit(): void {
   if (this.name) {
     this.selected.name = this.name;
     this.selected.year = this.year;
     this.selected.like = this.like;
   }
   this.serveMovieData.editMovie(this.selected).subscribe(res => console.log(res));
  }

}
