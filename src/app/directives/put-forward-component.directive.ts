import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appPutForward]'
})
export class PutForwardComponentDirective {
@HostBinding('style.cursor')
cursor = 'auto';
@HostBinding('style.border')
border = 'auto';


  constructor() { }

@HostListener('mouseover')
 mouseOver(){
  this.cursor = 'pointer';
  this.border = 'solid';
 }

  @HostListener('mouseout')
  mouseOut(){
    this.border = 'transparent';
  }
}
