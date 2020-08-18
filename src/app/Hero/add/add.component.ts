import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HeroData } from '../hero-data';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  @Output() newHeroes = new EventEmitter<HeroData>();
  name: string;
  born: Date;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const hero = new HeroData();
    hero.name = this.name;
    hero.born = this.born;
    hero.good = false;
    this.newHeroes.emit(hero);
  }

}
