import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ProductRepresentation } from '../models/product-representation';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl: string = 'https://fakestoreapi.com/'

  constructor(private http: HttpClient) { }

  getAllProductsWithLimit(limit: number = 5) {
    const productsUrl = `${this.baseUrl }products?limit=${limit}`;
    return this.http.get<ProductRepresentation[]>(productsUrl);  // You can also set do Array<ProductRepresentation> inside get<>
  }

  addProduct(product: ProductRepresentation) {
    const productsUrl = `${this.baseUrl }products`;
    return this.http.post<ProductRepresentation>(productsUrl, product); // Although ProductRepresentation includes id and rating, we will not include them when posting data as its not part of the payload needed, alternatively is to use a new prodcut rep that does't include id & rating
  }

}
