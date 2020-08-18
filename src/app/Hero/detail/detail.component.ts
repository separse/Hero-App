import { Component, OnInit, Input } from '@angular/core';
import { HeroData } from '../hero-data';
import { HeroService } from '../hero.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthHeroService } from '../auth-hero.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  gotHero: HeroData;

  constructor(
    private service: HeroService,
    private route: ActivatedRoute,
    private router: Router,
    private servAuthHero: AuthHeroService
    ) { }

  ngOnInit(): void {
    this.getHero();
  }

  trueGood(): void {
    this.gotHero.good = true;
    this.service.updateHeroes(this.gotHero).subscribe(res => console.log(res));
  }

  onDelete(): void {
    this.service.deleteHero(this.gotHero).subscribe(res => console.log(res)); this.gotHero = null;
    this.router.navigate(['/home']);
  }

  getHero(): void {
    const name = this.route.snapshot.params.name;
    this.service.getHeroData(name).subscribe( hero => this.gotHero = hero);
  }

  onEdit(): void {
    this.router.navigate(
      ['/heroes', this.gotHero.name, 'edit'],
      {
        queryParams: {born: this.gotHero.born},
        fragment: 'editing'
      },
    );
  }

  isAdmin(): boolean {
    return this.servAuthHero.loggedIn;
  }

}
