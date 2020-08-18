import { Component, OnInit, Input } from '@angular/core';
import { HeroData } from '../hero-data';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() gotHero: HeroData;

  constructor(private service: HeroService) { }

  ngOnInit(): void {
  }

  trueGood(): void {
    this.gotHero.good = true;
    this.service.updateHeroes(this.gotHero).subscribe(res => console.log(res));
  }

  onDelete(): void {
    this.service.deleteHero(this.gotHero).subscribe(res => console.log(res));
  }
}
