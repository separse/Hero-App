import { Component, OnInit } from '@angular/core';
import { HeroData } from '../hero-data';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  funct = true;
  heroes;
  gotHero: HeroData;

  constructor(private service: HeroService) {

   }

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.funct = false;
    // }, 2000);
    // this.heroes = this.service.heroesData;
    this.service.heroesData.subscribe(chiz => this.heroes = chiz);
  }

  getHero(item): void {
    this.gotHero = item;
  }

  onNewHero(e: HeroData): void {
    this.service.addHero(e).subscribe(res => console.log(res)
    );
    this.funct = true;
  }

  onClick(): void {
    this.gotHero = null;
    this.funct = false;
  }
}
