import { Directive , ElementRef, HostListener,Input} from '@angular/core';

@Directive({
  selector: `[hightlight]`
})
export class HightlightDirective {

  @Input() hightlightColor : string;
  constructor(private el : ElementRef) {
  }
  @HostListener('mouseenter') onMouseEnter(){
    this.hightlight('yellow');
  }

  // @HostListener('mouseenter') onMouseEnter() {
  //   this.highlight('yellow');
  // }

  @HostListener('mouseleave') onMouseLeave() {
    this.hightlight(null);
  }

  private hightlight(color:string){
    this.el.nativeElement.style.backgroundColor = color;
  }

}
