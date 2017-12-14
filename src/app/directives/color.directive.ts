import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[colorDir]'
})
export class ColorDirective implements OnInit {
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    const button = document.getElementsByTagName('button');
    document.getElementById('btn').style.color = "#fff";
    document.getElementById('btn').style.borderRadius= "4px";
    document.getElementById('btn').style.border= "1px solid transparent";
    document.getElementById('btn').style.padding= "6px 12px";
    this.backgroundColor = this.defaultColor;
  }
  @Input() defaultColor: string = '#5cb85c';
  @Input('colorDir') highlightColor: string = '#449d44';

  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostListener('mouseover') mouseover(eventData: Event) {
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = this.defaultColor;
  }
}
