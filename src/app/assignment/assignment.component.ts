import { Component, OnInit } from '@angular/core';
import { HeroData } from '../hero-data';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

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
  funct = true;

  gotHero: HeroData;
  constructor() { }

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.funct = false;
    // }, 2000);
  }

  getHero(item): void {
    this.gotHero = item;
  }

  onNewHero(e: HeroData): void {
    this.heroes.push(e);
    this.funct = true;
  }

  onClick(): void {
    this.gotHero = null;
    this.funct = false;
  }
}
