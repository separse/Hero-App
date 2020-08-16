import { Component, OnInit } from '@angular/core';
import { DataMovie } from '../data-movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  initials: DataMovie[];
  selected: DataMovie;
  firstPage = true;

  constructor() { }

  ngOnInit(): void {
    this.initials = [
      {
        name: 'Dark Knight',
        year: new Date('2008'),
        like: true
      },
      {
        name: 'Pirates of the Carribean',
        year: new Date('2015'),
        like: true
      },
      {
        name: 'Allien',
        year: new Date('2005'),
        like: false
      },
    ];
  }

  onClick(item): void {
    this.selected = item;
  }

  addMovie(): void {
    this.selected = null;
    this.firstPage = false;
  }

  newMovie(e): void {
    this.initials.push(e);
    this.firstPage = true;
  }
}
