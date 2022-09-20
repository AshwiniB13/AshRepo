import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appUserformchanges]'
})
export class UserformchangesDirective {

  constructor(private er: ElementRef) {
    this.er.nativeElement.style.backgroundColor = 'yellow';
  }

}
