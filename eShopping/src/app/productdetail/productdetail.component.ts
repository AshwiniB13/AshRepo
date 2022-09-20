import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { eProduct } from '../models/eproductmodel';
import { eProductService } from '../services/eProductService';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit, OnChanges
{
  pid: any;
  product: eProduct;

  @Input() sample;


  constructor(private activatedRoute: ActivatedRoute,
    private productService: eProductService) {
    console.log("hello Contructor");
    ////this.pid = this.activatedRoute.snapshot.params["pid"];
    ////this.product = this.productService.getProductById(this.pid);
    //this.activatedRoute.params.subscribe((data) => {
    //  this.pid = data['pid'];
    //  console.log(this.pid);
    //  this.product = this.productService.getProductById(this.pid);
    //})

  }


  ngOnChanges(changes: SimpleChanges): void {
    console.log("OnChange");
  }


  ngOnInit(): void {
    console.log("OnInIt");
  }

  ngDoCheck() {
    console.log('do check triggered')
    this.pid = this.activatedRoute.snapshot.params["pid"];
    this.product = this.productService.getProductById(this.pid)
  }

}


