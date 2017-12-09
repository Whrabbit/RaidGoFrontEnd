import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[colorDir]'
})
export class ColorDirective implements OnInit {
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }
  @Input() defaultColor: string = 'transparent';
  @Input('colorDir') highlightColor: string = 'blue';

  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostListener('mouseover') mouseover(eventData: Event) {
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = this.defaultColor;
  }
}
