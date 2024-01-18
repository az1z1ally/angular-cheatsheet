import { Injectable } from '@angular/core';
import { Color } from '../types/color';
import { Observable, delay, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product, ProductResponse } from '../types/product';
import { Recipe, RecipeResponse } from '../types/recipe';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://dummyjson.com'
   }

  getColorList(): Observable<Color[]>{
    const colors: Color[] = [
      {code: 'c1', name: 'Red'},
      {code: 'c2', name: 'Green'},
      {code: 'c3', name: 'Yellow'},
      {code: 'c4', name: 'Black'},
      {code: 'c0', name: 'white'},
    ];

    return of(colors).pipe(delay(2000))
  }

  getProducts(): Observable<Product[]>{
    const url = `${this.baseUrl}/products`
    return this.http.get<ProductResponse>(url).pipe(map(resp => resp.products))
  }

  getRecipes(): Observable<Recipe[]>{
    const url = `${this.baseUrl}/recipes`
    return this.http.get<RecipeResponse>(url).pipe(map(resp => resp.recipes))
  }
}
