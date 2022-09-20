import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { eProduct } from '../models/eproductmodel';
import { product } from '../models/product';
import { eProductService } from '../services/eProductService';
import { ProductHttpService } from '../services/producthttp.service';

@Component({
  selector: 'app-edit-eproduct',
  templateUrl: './edit-eproduct.component.html',
  styleUrls: ['./edit-eproduct.component.css']
})
export class EditEproductComponent implements OnInit {

  addproduct : eProduct;
  product: eProduct;
  products: eProduct[];
  constructor(private productService: eProductService, private router: Router, private producthttpservice: ProductHttpService) {
    this.product = new eProduct();
    this.addproduct = new eProduct();
    /*this.products = this.productService.getProducts();*/

    this.producthttpservice.getPizzas().subscribe(PizzaData => {
      console.log("PizzaData",PizzaData);
      this.products = PizzaData as eProduct[];
    })
  }

  getProduct(id: any) {
    this.product = this.productService.getProductById(id) ?? new eProduct();

  }

  ngOnInit(): void {
  }

  updateProduct() {
    console.log(this.product.name);
    ////this.productService.editProduct(this.product);
    //alert("Product details updated");
    ////this.router.navigate(['products']);
    //this.router.navigateByUrl('products');

    this.producthttpservice.updateProduct(this.product).subscribe(updateProduct => {
      alert("Product details updated");
      this.router.navigate(['products']);
      this.router.navigateByUrl('products');
    })
  }

  addProduct() {
    console.log(this.addproduct);
    this.producthttpservice.addProduct(this.addproduct).subscribe(addProduct => {
      alert("Product details Added");
      this.router.navigate(['products']);
      this.router.navigateByUrl('products');
    })
  }

  deleteProduct() {
    this.producthttpservice.deleteProduct(this.product.id).subscribe(deleteProduct => {
      alert("Product details deleted");
      this.router.navigate(['products']);
      this.router.navigateByUrl('products');
    })
  }
}

