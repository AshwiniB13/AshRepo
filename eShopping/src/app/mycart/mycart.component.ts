import { Component, OnInit } from '@angular/core';
import { product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MycartComponent implements OnInit {

  cartproducts: product[];
  constructor(private productService: ProductService) {
    this.cartproducts = this.productService.getCartProducts();
  }

  ngOnInit(): void {
  }

}
