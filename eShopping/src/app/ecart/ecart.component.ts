import { Component, OnInit } from '@angular/core';
import { Animal } from '../models/Animal';
import { eProduct } from '../models/eproductmodel';
import { Horse } from '../models/Horse';
import { eCartService } from '../services/eCartService';

@Component({
  selector: 'app-ecart',
  templateUrl: './ecart.component.html',
  styleUrls: ['./ecart.component.css']
})
export class EcartComponent implements OnInit {
  animal: Animal;
  horse: Horse;
  cart: eProduct[];
  show: boolean;
  constructor(private cartService: eCartService) {
    this.cart = this.cartService.getCart();
    this.animal = new Animal();
    this.horse = this.animal; // type safety feature
    this.show = false;
  }


  ngOnInit(): void {
  }

  showPayment() {
    this.show = !this.show;
  }
}
