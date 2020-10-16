import { Component, Input, OnChanges, OnInit } from '@angular/core';
import {Customer} from '../../models/customer/customer.model'
@Component({
  selector: 'app-parent-life-cycle-hooks',
  templateUrl: './parent-life-cycle-hooks.component.html',
  styleUrls: ['./parent-life-cycle-hooks.component.css']
})
export class ParentLifeCycleHooksComponent implements  OnChanges, 
                                                       OnInit
                                                      //  , 
                                                      //  DoCheck, 
                                                      //  AfterContentInit, 
                                                      //  AfterContentChecked, 
                                                      //  AfterViewInit, 
                                                      //  AfterViewChecked, 
                                                      //  OnDestroy 
                                                       {

  constructor() { 
    console.log('This is a parent constructor')
  }

  title="ngOnChanges Hook";
  message=""; 
  customer: Customer = new Customer();
  name="";
  code=0;

  updateCustomer(){
    this.customer = new Customer(); 
    this.customer.name=this.name;
    this.customer.code= this.code;
  }

  ngOnChanges(){
    console.log('ngOnChanges: Life Cycle Hook')
  }

  ngOnInit(): void {
    console.log('ngOnInit: Life Cycle Hook')
  }

  ngDoCheck(){
    console.log('ngDoCheck: Life Cycle Hook')
  }

  // ngAfterContentInit(){
  //   console.log('ngAfterContentInit: Life Cycle Hook')
  // }

  // ngAfterContentChecked(){
  //   console.log('ngAfterContentChecked: Life Cycle Hook')
  // }

  // ngAfterViewInit(){
  //   console.log('ngAfterViewInit: Life Cycle Hook')

  // }

  // ngAfterViewChecked(){
  //   console.log('ngAfterViewChecked: Life Cycle Hook')
  // }

  // ngOnDestroy(){
  //   console.log('ngOnDestroy: Life Cycle Hook')
  // }
}
