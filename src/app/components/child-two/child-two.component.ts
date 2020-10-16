import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.css']
})

export class ChildTwoComponent implements OnInit {

  count = 5;

  increment(){
    this.count ++;
  }

  decrement(){
    this.count --;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
