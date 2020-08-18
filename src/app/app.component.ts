import { Component } from '@angular/core';
import { AuthHeroService } from './Hero/auth-hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment';
  head = 'My App';

  constructor(
    private servAuthHero: AuthHeroService,
    private router: Router
  ) {}

    login(): void {
      if (this.servAuthHero.loggedIn === false) {
        this.servAuthHero.logIn();
      } else {
        this.servAuthHero.logOut();
      }
    }
}
