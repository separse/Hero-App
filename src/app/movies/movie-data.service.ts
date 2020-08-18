import { Injectable } from '@angular/core';
import { DataMovie } from './data-movie';
import { of, Observable } from 'rxjs';
import { LogDataService } from './log-data.service';

@Injectable({
  providedIn: 'root'
})
export class MovieDataService {

  initials = [
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

  constructor(private servLogData: LogDataService) { }

  get initailData(): Observable<DataMovie[]> {
    return of(this.initials);
  }

  addMovie(added): Observable<string> {
    this.initials.push(added);
    this.servLogData.printIt(added.name, 'Added');
    return of('ADDED');
  }

  updateMovie(selected): Observable<string> {
    this.initials.forEach((movie, i) => {
      if (movie === selected) {
        this.initials[i] = selected;
      }
    });
    this.servLogData.printIt(selected.name, 'Updated');
    return of('UPDATED');
  }

  deleteMovie(deleted): Observable<string> {
    this.servLogData.printIt(deleted.name, 'deleted');
    this.initials.forEach((movie, i) => {
      if (movie === deleted) {
        this.initials.splice(i, 1);
      }
    });
    return of('DELETED');
  }
}
