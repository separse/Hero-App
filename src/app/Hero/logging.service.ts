import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

  printIt(name, action): void {
    console.log(`${name} has been ${action}`);
  }
}
