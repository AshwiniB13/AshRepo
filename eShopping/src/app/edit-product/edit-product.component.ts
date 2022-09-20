import { Component, OnInit ,Input} from '@angular/core';
import { Router } from '@angular/router';
import { product } from '../models/product';
import { ProductService } from '../services/product.service';
import { ProductHttpService } from '../services/producthttp.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  product: product;
  products: product[];
  //@Input() currentprod: product;

  constructor(private producctservice: ProductService, private producthttpservice: ProductHttpService, private router: Router) {
    this.product = new product();
    this.products = this.producctservice.getAllProducts();
  }

  ngOnInit(): void {
  }

  UpdateQuantity(product: any, quantity:any) {
    //console.log(quantity);
    //console.log(product.quantity);
    //this.producctservice.UpdateProductQuantity(product, quantity);
    //this.product = new product();
    //alert('Quantity Updated');
    console.log("edit prod");
    this.producthttpservice.updateProduct(this.product).subscribe(updateProduct => {
      alert("Product details updated");
      this.router.navigate(['products']);
      this.router.navigateByUrl('products');
    })
  }


}
