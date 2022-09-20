import { eProduct } from "../models/eproductmodel";

export class eProductService {
  products: eProduct[];
  constructor() {
    this.products = [
      new eProduct(101, "phone xyz", 200, 5, "./assets/images/phone1.jfif"),
      new eProduct(102, "phone abc", 450, 3, "./assets/images/phone3.jfif")
    ]
  }
  getProducts(): eProduct[] {
    return this.products;
  }
  getProductById(id: number) {
    for (let index = 0; index < this.products.length; index++) {
      if (this.products[index].id == id) {
        return this.products[index];
      }
    }
    return undefined;
  }
  editProduct(newProduct: eProduct) {
    var product = this.getProductById(newProduct.id ?? 0)
    if (product != undefined) {
      product.name = newProduct.name;
      product.quantity = newProduct.quantity;
      product.price = newProduct.price;
      product.pic = newProduct.pic;
    }
  }
}
