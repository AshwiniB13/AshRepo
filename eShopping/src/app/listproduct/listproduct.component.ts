import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { eProduct } from '../models/eproductmodel';
import { eProductService } from '../services/eProductService';

@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css']
})
export class ListproductComponent implements OnInit {

  products: eProduct[]
  constructor(private productService: eProductService,
    private router: Router) {
    this.products = this.productService.getProducts();
  }
  showDetails(pid) {
    //this.router.navigate(['details', pid])
    this.router.navigate(['list/details', pid]) /*children rouring  check app routing file*/
  }
  ngOnInit(): void {
  }

}
