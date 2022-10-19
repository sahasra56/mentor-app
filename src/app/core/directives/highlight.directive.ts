import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
    selector: '[my-error]'
})

export class HighlightDirective {

    constructor(
        private elementRef: ElementRef, private renderer: Renderer2
    ) {
        elementRef.nativeElement.style.background = 'blue';
    }

    ngOnInit() {
        this.renderer.setStyle(this.elementRef.nativeElement, 'background', "blue");
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.elementRef.nativeElement.style.background = 'red';
        console.log('Enter 1');
    }

    @HostListener('mouseleave') onMouseLeave() {
        console.log('Leave');
    }
}