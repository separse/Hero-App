import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroData } from '../hero-data';


@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.css']
})
export class EditHeroComponent implements OnInit {

  hero: HeroData;
  heroName: string;
  timeBorn: Date;

  constructor(
    private servHeroData: HeroService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const name = this.route.snapshot.params.name;
    this.getHero(name);
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
    this.route.queryParams.subscribe(res => console.log(res));
    this.route.fragment.subscribe(res => console.log(res));
  }

  getHero(name): void {
    this.servHeroData.getHeroData(name).subscribe(res => this.hero = res);
  }

  onSave(): void {
    if (this.heroName) {
      this.hero.name = this.heroName;
    }
    if (this.timeBorn) {
      this.hero.born = this.timeBorn;
    }
    this.servHeroData.updateHeroes(this.hero).subscribe(res => console.log(res));
    this.router.navigate(['/home']);
  }

}
