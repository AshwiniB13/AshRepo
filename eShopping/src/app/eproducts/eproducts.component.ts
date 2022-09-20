import { Component, OnInit } from '@angular/core';
import { eProduct } from '../models/eproductmodel';
import { eProductService } from '../services/eProductService';
import { ProductHttpService } from '../services/producthttp.service';

@Component({
  selector: 'app-eproducts',
  templateUrl: './eproducts.component.html',
  styleUrls: ['./eproducts.component.css']
})
export class EproductsComponent implements OnInit {

  products: eProduct[];
  //constructor(private productService: eProductService) {
  //  this.products = this.productService.getProducts();
  //}

  constructor(private productService: eProductService,
    private productHttpService: ProductHttpService) {
    this.products = this.productService.getProducts();
    this.productHttpService.getPizzas().subscribe((pizzaData) => {
      //console.log(pizzaData);
      this.products = pizzaData as eProduct[];
    })
  }

  change() {
    this.products[0] = new eProduct(103, "asjkdfha", 20, 90, './assets/images/phone1.jfif')
  }

  ngOnInit(): void {
  }


}
