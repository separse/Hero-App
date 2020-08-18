import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthHeroService {

  loggedIn = false;

  logIn(): void {
    this.loggedIn = true;
  }

  logOut(): void {
    this.loggedIn = false;
  }

  isAdmin(): Promise<any> {
    const isUserAdmin = new Promise (
      (resolve, reject) => {
        resolve(this.loggedIn);
      }
    );
    return isUserAdmin;
  }

}
