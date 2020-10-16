import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ChildThreeComponent} from '../child-three/child-three.component';

@Component({
  selector: 'app-parent-three',
  templateUrl: './parent-three.component.html',
  styleUrls: ['./parent-three.component.css']
})
export class ParentThreeComponent implements OnInit, AfterViewInit {

  title="parent uses @ViewChild to get refrence to the child"

  @ViewChild(ChildThreeComponent) child: ChildThreeComponent;

  increment(){
    this.child.increment();
  }

  decrement(){
    this.child.decrement();
  }

  constructor() {
    console.log('This is parent constructor')
   }

  ngOnInit(): void {
    console.log(`this is NgOnit lifecycle hook`, this.child )
  }

  ngAfterViewInit(){
    console.log(`this is ngAfterViewInit lifecycle hook`, this.child )
   // console.log( this.child )
  }

}
