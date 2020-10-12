import { Component, OnInit } from '@angular/core';
import {Movie} from '../../models/movie/movie.model'

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  value=0;
  show= false;
  cssString: string = 'textColor bgContent';
  cssArray: string[] = ["textColor", "bgContent"]
  cssObject:object = {'textColor': true, 'bgContent': true}
  textColor:string = "blue"
  status: string ="success"

  movies: Movie[] = [
    {
      name:'Avengers: Endgame',
      cast:'Chris Evans, Robert Downey, Jr., Chris Hemsworth',
      director: 'Joe Russo, Anthony Russo',
      releaseDate: 'April 26, 2019'
    },
    {
      name:'The Rise Of Skywalker',
      cast:'J.J. Abrams',
      director: 'Daisy Ridley, John Boyega, Oscar Isaac, Adam Driver',
      releaseDate: '20 December 2019'
    },
    {
      name:'Frozen 2',
      cast:'Idina Menzel, Kristen Bell, Jonathan Groff, Josh Gad',
      director: 'Jennifer Lee, Chris Buck',
      releaseDate: '22 November 2019'
    },
    {
      name:'The Mask',
      cast: 'Jim Carrey, Cameron Diaz, Peter Greene, Ben Stein',
      director:'Chuck Russell',
      releaseDate: '28 July 1994'
    },
    {
      name:'The Martian',
      cast:'Matt Damon',
      director: 'Ridley Scott',
      releaseDate: '2 October 2015'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }



}
