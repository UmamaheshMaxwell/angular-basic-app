import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-another-child',
  templateUrl: './another-child.component.html',
  styleUrls: ['./another-child.component.css'],
  inputs:['count']
})
export class AnotherChildComponent implements OnInit {

  
  @Input('MyCount') count: number;
  constructor() { }

  ngOnInit(): void {
  }

}
