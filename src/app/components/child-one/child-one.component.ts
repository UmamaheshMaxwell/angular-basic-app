import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent implements OnInit {

   @Input() count: number;

   @Output() countChanged: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  increment(){
    this.count ++;
    this.countChanged.emit(this.count);
  }

  decrement(){
    this.count--;
    this.countChanged.emit(this.count);
  }
}
