import { Component, OnInit, Input } from '@angular/core';
import { HeroData } from '../hero-data';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() gotHero: HeroData;
  constructor() { }

  ngOnInit(): void {
  }

  trueGood(): void {
    this.gotHero.good = true;
  }
}
