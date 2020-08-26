import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthHeroService {

  loggedIn = false;

  constructor(private afAuth: AngularFireAuth) { }

  login(): void {
      //   this.loggedIn = true;
    this.afAuth.signInWithRedirect(new auth.GoogleAuthProvider());
  }

  logOut(): void {
    // this.loggedIn = false;
    this.afAuth.signOut();
  }

  getLoggedUser(): Observable<firebase.User> {
    return this.afAuth.authState;
  }

  // isAdmin(): Promise<any> {
  //   const isUserAdmin = new Promise (
  //     (resolve, reject) => {
  //       resolve(this.loggedIn);
  //     }
  //   );
  //   return isUserAdmin;
  // }

}
