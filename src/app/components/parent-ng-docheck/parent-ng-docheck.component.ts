import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer/customer.model';

@Component({
  selector: 'app-parent-ng-docheck',
  templateUrl: './parent-ng-docheck.component.html',
  styleUrls: ['./parent-ng-docheck.component.css']
})
export class ParentNgDocheckComponent implements OnInit {

  constructor() { 
    console.log('This is a parent constructor')
  }

  title="ngOnChanges Hook";
  message=""; 
  customer: Customer = new Customer();
  name="";
  code=0;

  updateCustomer(){
    //this.customer = new Customer(); 
    this.customer.name=this.name;
    this.customer.code= this.code;
  }

  ngOnChanges(){
    console.log('Parent: ngOnChanges: Life Cycle Hook')
  }

  ngOnInit(): void {
    console.log('Parent: ngOnInit: Life Cycle Hook')
  }

  ngDoCheck(){
    console.log('Parent: ngDoCheck: Life Cycle Hook')
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
