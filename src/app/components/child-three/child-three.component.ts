import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-three',
  templateUrl: './child-three.component.html',
  styleUrls: ['./child-three.component.css']
})
export class ChildThreeComponent implements OnInit {

  count = 1;

  increment(){
    this.count ++;
  }

  decrement(){
    this.count --;
  }

  constructor() {
    console.log('This is child constructor')
   }

  ngOnInit(): void {
  }

}
