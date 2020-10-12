import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-one',
  templateUrl: './parent-one.component.html',
  styleUrls: ['./parent-one.component.css']
})
export class ParentOneComponent implements OnInit {

  title=" Component Interaction"
  counter =1;
  
  constructor() { }

  ngOnInit(): void {
  }

  countChangedHandler(count: number){
    this.counter= count;
    console.log(count);
  }

}
