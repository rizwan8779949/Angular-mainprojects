import { Directive,ElementRef,Renderer,HostListener  } from '@angular/core'; 
@Directive({
  selector: '[appMydir]',
})
export class MydirDirective { 
  constructor(private er:ElementRef,private rn:Renderer) 
  { 
    rn.setElementStyle(er.nativeElement, 'backgroundColor', 'gray');
  }
  @HostListener('mouseenter') onMouseEnter() 
  {
    this.rn.setElementStyle(this.er.nativeElement, 'backgroundColor', 'gray');
}
@HostListener('mouseleave') onMouseLeave() {
  this.rn.setElementStyle(this.er.nativeElement, 'backgroundColor', 'yellow');
} 
}
