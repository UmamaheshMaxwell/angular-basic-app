import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective implements OnInit{

  constructor(private el: ElementRef) { 
    console.log(this.el.nativeElement)
  }

  ngOnInit(){
    this.el.nativeElement.style.color='white';
    this.el.nativeElement.style.backgroundColor = "crimson";
    this.el.nativeElement.textContent += " Hello World";
  }

}
