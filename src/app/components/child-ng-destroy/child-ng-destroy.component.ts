import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-ng-destroy',
  templateUrl: './child-ng-destroy.component.html',
  styleUrls: ['./child-ng-destroy.component.css']
})
export class ChildNgDestroyComponent implements OnInit, OnDestroy {

  constructor() { 
    console.log(`This is child component constructor`)
  }

  ngOnInit(): void {
    console.log('Child: ngOnInit')
  }

  ngOnDestroy(){
    console.log('Child: ngOnDestroy')
  }

}
