import { product } from "../models/product";

export class ProductService {
  products: product[];
  cartproducts : product[];
  constructor() {
    this.products = [
      new product(101, "Mobile Phone Model xyz", 2, 9000, 4, "./assets/images/phone1.jfif"),
      new product(102, "Mobile Phone model pqr", 25, 7000, 5, "./assets/images/phone2.jfif"),
      new product(103, "Mobile Phone model abcs", 25, 12000, 15, "./assets/images/phone3.jfif")
    ];
    this.cartproducts = [];
  }

  getAllProducts() {
    return this.products;
  }

  getProductById(id: number) {

    for (let index = 0; index < this.products.length; index++)
      if (this.products[index].id == id) {
        return this.products[index];
      }

    return undefined;
  }

  addProduct(product: product) {
    this.products.push(product);
  }

  UpdateProductQuantity(product: product, quantity: number) {
    product.quantity = quantity;
    
  }

  addToCart(product: product) {
    this.cartproducts.push(product);
  }

  getCartProducts() {
    return this.cartproducts;
  }
}
