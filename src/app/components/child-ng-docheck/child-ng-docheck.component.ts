import { Component, DoCheck, Input, OnChanges, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer/customer.model';

@Component({
  selector: 'app-child-ng-docheck',
  templateUrl: './child-ng-docheck.component.html',
  styleUrls: ['./child-ng-docheck.component.css']
})
export class ChildNgDocheckComponent implements OnInit, OnChanges, DoCheck {

  
  @Input() message: string;
  @Input() customer:Customer;
  changelog: string[]=[];
  oldCustomer:Customer = new Customer();
  DoCheckCount=0;

  constructor() { 
    console.log('This is child constructor')
  }

  ngOnInit(): void {
    console.log('Child: OnInit')
  }

  ngOnChanges(){
    console.log('Child : ngOnChanges')
  }

  ngDoCheck(){
    console.log('Child : ngDoCheck')
    this.DoCheckCount++;

    if(this.oldCustomer.name !== this.customer.name || this.oldCustomer.code !== this.customer.code){
      const from = JSON.stringify(this.oldCustomer)
      const to= JSON.stringify(this.customer)

      const changeLog = `DoCheck customer changed from ${from} to ${to}`
      this.changelog.push(changeLog)
      this.oldCustomer =Object.assign({}, this.customer);
    }
  }

}
