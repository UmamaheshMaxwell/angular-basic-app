import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  title: string = "Component Communication"
  counter=1;

  increment(){
    this.counter++;
  }

  decrement(){
    this.counter--;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
