import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class SearchService {
  constructor(private httpClient: HttpClient) {

  }
  getPostData() {
    return this.httpClient.get('https://pixabay.com/api/?key=29577618-5e0e0c4ad98483febd3905ac2');
  }
}
