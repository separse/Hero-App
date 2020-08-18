import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthHeroService } from './auth-hero.service';

@Injectable({
  providedIn: 'root'
})
export class AuthHeroGuard implements CanActivate {

  constructor(
    private servAuthHEro: AuthHeroService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.servAuthHEro.isAdmin().then(
      (authenticate: boolean) => {
        if (authenticate) {
          return true;
        } else {
          this.router.navigate(['/home']);
          return false;
        }
      }
    );
  }

}
