import { Directive, ElementRef, Input, Renderer, HostListener } from '@angular/core';
 
@Directive({ selector: '[showMessage]' })
export class MessageDirective {
        
 @Input('showMessage') message:string;
    
    constructor(el: ElementRef, renderer: Renderer) {
       renderer.setElementStyle(el.nativeElement, 'cursor', 'pointer');    
    }
    
    @HostListener('click') onClick() {       
        alert(this.message);
}
    
    