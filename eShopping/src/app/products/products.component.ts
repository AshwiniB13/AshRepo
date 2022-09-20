import { Component, OnInit } from '@angular/core';
import { product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  dob: Date;
  product: product;
  products: product[];
  choice: string = "home"
  constructor(private producctservice: ProductService) {
    this.dob = new Date(2003,12,12);
    this.product = new product();
    this.products = this.producctservice.getAllProducts();
  }

  ngOnInit(): void {
  }

  insertProduct(cpic: any) {
    this.product.pic = "./assets/images/" + cpic.files[0].name;
    console.log(this.product.pic);
    this.producctservice.addProduct(this.product);
    this.product = new product();
    alert('product added');
  }

  SearchProduct(id: any) {
    this.producctservice.getProductById(id);
  }

  AddToCart(product: product) {
    console.log(this.product.id);
    this.producctservice.addToCart(product);
  }
}
