import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { eProduct } from "../models/eproductmodel";

@Injectable()
export class ProductHttpService {
  constructor(private httpClient: HttpClient) {

  }
  getPizzas() {
    return this.httpClient.get("https://sampleapig3new.azurewebsites.net/api/Product")
  }

  addProduct(product: eProduct) {
    return this.httpClient.post("https://sampleapig3new.azurewebsites.net/api/Product", product)
  }

  updateProduct(product: eProduct) {
    return this.httpClient.put("https://sampleapig3new.azurewebsites.net/api/Product", product)
  }
  deleteProduct(id: number) {
    return this.httpClient.delete("https://sampleapig3new.azurewebsites.net/api/Product?pid=" + id)
  }
}
