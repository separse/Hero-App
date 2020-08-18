import { Injectable } from '@angular/core';
import { HeroData } from './hero-data';
import { Observable, of } from 'rxjs';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  heroes: HeroData[] = [
    {
      name: 'Batman',
      born: new Date('1985-03-04'),
      good: true
    },
    {
      name: 'Joker',
      born: new Date('1993-01-01'),
      good: false
    }
  ];

  constructor(private service: LoggingService) { }

  get heroesData(): Observable<HeroData[]> {
    return of(this.heroes);
  }

  addHero(e: HeroData): Observable<string> {
    this.heroes.push(e);
    this.service.printIt(e.name, 'Added');
    return of('A Hero Added');
  }

  updateHeroes(e: HeroData): Observable<string> {
    this.heroes.forEach((hero, i) => {
      if (hero === e) {
        this.heroes[i] = e;
      }
    });
    this.service.printIt(e.name, 'Updated');
    return of('A Hero Updated');
  }

  deleteHero(e: HeroData): Observable<string> {
    this.heroes.forEach((hero, i) => {
      if (hero === e) {
        this.heroes.splice(i, 1);
      }
    });
    this.service.printIt(e.name, 'Deleted');
    return of('A Hero Deleted');
  }

}
