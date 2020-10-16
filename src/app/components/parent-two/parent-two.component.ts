import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-two',
  templateUrl: './parent-two.component.html',
  styleUrls: ['./parent-two.component.css']
})
export class ParentTwoComponent implements OnInit {

  title = "Parent using local varibale to access child"
  
  constructor() { }

  ngOnInit(): void {
  }

}
