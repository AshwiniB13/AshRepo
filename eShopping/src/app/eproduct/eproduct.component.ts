import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { eProduct } from '../models/eproductmodel';
import { eCartService } from '../services/eCartService';
import { eProductService } from '../services/eProductService';

@Component({
  selector: 'app-eproduct',
  templateUrl: './eproduct.component.html',
  styleUrls: ['./eproduct.component.css']
})
export class EproductComponent implements OnInit, OnChanges {

  dob: Date;
  @Input() product: eProduct = new eProduct();
  @Output() buyPizzaEvent = new EventEmitter<number>();
  constructor(private cartService: eCartService, private productService: eProductService) {

    this.dob = new Date(2003, 12, 12);
  }


  ngOnChanges(changes: SimpleChanges): void {
    console.log("OnChange triggered");
    console.log(changes);
  }

  ngOnInit(): void {
    console.log("OnInIt");
  }

  checkQuanity() {
    if (this.product != undefined)
      return this.product.quantity ?? 0;
    return 0;
  }
  buyPizza() {

    var myProd = new eProduct();
    myProd.quantity = 1;
    myProd.price = this.product.price ?? 0;
    myProd.pic = this.product.pic;
    myProd.name = this.product.name;
    myProd.id = this.product.id;
    console.log(myProd)
    this.cartService.addToCart(myProd);
    this.product.quantity = this.product.quantity ? this.product.quantity - 1 : 0;
  }
}


