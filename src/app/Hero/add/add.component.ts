import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HeroData } from '../hero-data';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  // @Output() newHeroes = new EventEmitter<HeroData>();
  name: string;
  born: Date;

  constructor(private servHeroData: HeroService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const hero = new HeroData();
    hero.name = this.name;
    hero.born = this.born;
    hero.good = false;
    // this.newHeroes.emit(hero);
    this.servHeroData.addHero(hero).subscribe(res => console.log(res));
  }

}
