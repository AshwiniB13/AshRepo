import { eProduct } from "../models/eproductmodel";

export class eCartService {
  cart: eProduct[];
  constructor() {
    this.cart = [];
  }

  addToCart(product: eProduct) {
    var flag: boolean = false;
    for (let index = 0; index < this.cart.length; index++) {
      if (this.cart[index].id == product.id) {
        flag = true;
        this.cart[index].quantity = (this.cart[index].quantity ?? 0) + 1;
      }
    }
    if (!flag)
      this.cart.push(product);
  }

  getCart() {
    return this.cart;
  }
}
