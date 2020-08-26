import { Component, OnInit } from '@angular/core';
import { AuthHeroService } from './Hero/auth-hero.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  user: firebase.User;
  head = 'My App';

  constructor(
    private afAuth: AngularFireAuth,
    private servAuthHero: AuthHeroService,
    private router: Router
  ) {}

    login(): void {
      this.servAuthHero.login();
      // if (this.servAuthHero.loggedIn === false) {
      //   this.servAuthHero.logIn();
      // } else {
      //   this.servAuthHero.logOut();
      // }
    }

    logout(): void {
      this.servAuthHero.logOut();
    }

    ngOnInit(): void {
      this.servAuthHero.getLoggedUser().subscribe(res => {this.user = res; });
    }


}
