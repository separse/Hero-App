import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogDataService {

  constructor() { }

  printIt(name, action): void {
    console.log(`${name} has been ${action}`);
  }

}
