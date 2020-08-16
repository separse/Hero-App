import { Component, OnInit, Input } from '@angular/core';
import { DataMovie } from '../data-movie';

@Component({
  selector: 'app-show-movie',
  templateUrl: './show-movie.component.html',
  styleUrls: ['./show-movie.component.css']
})
export class ShowMovieComponent implements OnInit {

  @Input() selected: DataMovie;
  constructor() { }

  ngOnInit(): void {
  }

}
