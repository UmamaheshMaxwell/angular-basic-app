import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  title:string ="Pipe Example"
  toDate: Date = new Date();
  message: string = "Welcome to Angular Pipes"
  salary: number = 175;

  constructor() { }

  ngOnInit(): void {
  }

}
