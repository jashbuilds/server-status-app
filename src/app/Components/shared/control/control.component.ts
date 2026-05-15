import { Component, viewChild, ElementRef, inject, input, ViewEncapsulation, viewChildren, contentChildren, contentChild } from '@angular/core';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()'
  }
})
export class ControlComponent {
  label = input.required<string>()
  private el = inject(ElementRef)
  // @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>
  labelShow = viewChildren<ElementRef<HTMLLabelElement>>('input')
  textareaEl = contentChild<ElementRef>('input')

  onClick() {
    // console.log("clicked!");
    // console.log(this.el);
    // console.log(this.labelShow());
    console.log(this.textareaEl()?.nativeElement);
    
    
  }
}
