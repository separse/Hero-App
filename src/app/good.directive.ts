import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appGood]'
})
export class GoodDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.background = 'green';
    el.nativeElement.style.color = 'white';
  }

}
