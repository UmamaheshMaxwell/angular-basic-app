import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-ng-destroy',
  templateUrl: './parent-ng-destroy.component.html',
  styleUrls: ['./parent-ng-destroy.component.css']
})
export class ParentNgDestroyComponent implements OnInit {

  displayChild = true;

  toggle(){
    this.displayChild= !this.displayChild;
  }
  constructor() {
    console.log('This is parent component contructor')
   }

  ngOnInit(): void {
    console.log('Parent: NgOninit')
  }

  ngOnDestroy(){
    console.log('Parent: ngOnDestroy')
  }

}
