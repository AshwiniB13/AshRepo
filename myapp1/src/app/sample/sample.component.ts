import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  customer_name: string; // variable creation
  age: number;
  chooseclass: string;
  toggleStyle: string;
  togglevalue: boolean;
  thumbsupcount: number;
  thumbsup: string;

  constructor() {
    this.customer_name = "Ashwini B"; // assignment of value
    this.age = 32;
    this.chooseclass = "mystyle";
    this.toggleStyle = "glyphicon glyphicon-heart-empty";
    this.togglevalue = false;
    this.thumbsup = "glyphicon glyphicon-thumbs-up";
    this.thumbsupcount = 0;
  }

  ngOnInit(): void {
    console.log("on init of sample component");
  }


  chnagestyle() {
    console.log("ebent triggered");
    this.chooseclass = "yourstyle";
  }

  toggle() {
    if (this.togglevalue == false) {
      this.togglevalue = true;
      this.toggleStyle = "glyphicon glyphicon-heart";

    } else {
      this.togglevalue = false;        ;
      this.toggleStyle = "glyphicon glyphicon-heart-empty";

    }
  }
  thumbsupevent() {
    this.thumbsupcount++;
  }
  changename(customer:any) {
    this.customer_name = customer;
  }
}

