import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { customer } from '../models/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  //customer_name: string;
  //customer_age: number;
  //customer_phone: string;

  @Input() customerParentToChild: customer; //child component, iput communication from parent to child
  @Output() clickcheck: EventEmitter<string> = new EventEmitter(); //clickcheck is the event, comm from child to parent
  //customer: customer;

  constructor() {
    //this.customer_name = "Ashwini";
    //this.customer_age = 32;
    //this.customer_phone = "9999999999";
    //this.customer = new customer(101, "Tim", 21, "./assets/images/jerry-la-souris-ek8a3m.jpg")
    this.customerParentToChild = new customer(101, "Tim", 21, "./assets/images/Pizza1.jpg")

  }

  ngOnInit(): void {
  }

  showEvent() {
    this.clickcheck.emit("You have clicked " + this.customerParentToChild.id);
  }
}
