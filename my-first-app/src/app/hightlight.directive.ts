import { Directive , ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appHightlight]'
})
export class HightlightDirective {

  constructor(el : ElementRef) {
    el.nativeElement.style.backgroundColor ='yellow';
    
  }
  // @HostListener('mouseenter') onMouseEnter() {
  //   this.highlight('yellow');
  // }

  // @HostListener('mouseleave') onMouseLeave() {
  //   this.highlight(null);
  // }
  // public highlight(color: string) {
  //    this.e
  // }
}
