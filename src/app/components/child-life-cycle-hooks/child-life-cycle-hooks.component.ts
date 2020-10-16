import {Component, Input, OnChanges, OnInit, SimpleChanges  } from '@angular/core';
import {Customer} from '../../models/customer/customer.model'

@Component({
  selector: 'app-child-life-cycle-hooks',
  templateUrl: './child-life-cycle-hooks.component.html',
  styleUrls: ['./child-life-cycle-hooks.component.css']
})
export class ChildLifeCycleHooksComponent implements OnChanges, 
                                                      OnInit
                                                      // DoCheck, 
                                                      // AfterContentInit, 
                                                      // AfterContentChecked, 
                                                      // AfterViewInit, 
                                                      // AfterViewChecked, 
                                                      // OnDestroy 
                                                      {
  constructor() { 
    console.log('This is a child constructor')
  }

  @Input() message: string;
  @Input() customer:Customer;

  changelog: string[]=[];


  ngOnChanges(changes: SimpleChanges){
    console.log('child:ngOnChanges: Life Cycle Hook')
    console.log(JSON.stringify(changes))

    for(const propName in changes){
      const change = changes[propName];
      const from= JSON.stringify(change.previousValue)
      const to=JSON.stringify(change.currentValue);
      const changeLog = `${propName} : Changed From ${from} to ${to}`
      this.changelog.push(changeLog);
    }
  }

  ngOnInit(): void {
    console.log('child:ngOnInit: Life Cycle Hook')
  }

  // ngDoCheck(){
  //   console.log('child:ngDoCheck: Life Cycle Hook')
  // }

  // ngAfterContentInit(){
  //   console.log('child:ngAfterContentInit: Life Cycle Hook')
  // }

  // ngAfterContentChecked(){
  //   console.log('child:ngAfterContentChecked: Life Cycle Hook')
  // }

  // ngAfterViewInit(){
  //   console.log('child:ngAfterViewInit: Life Cycle Hook')

  // }

  // ngAfterViewChecked(){
  //   console.log('child:ngAfterViewChecked: Life Cycle Hook')
  // }

  // ngOnDestroy(){
  //   console.log('child:ngOnDestroy: Life Cycle Hook')
  // }

}
