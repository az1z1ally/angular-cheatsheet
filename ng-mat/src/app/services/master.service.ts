import { Injectable } from '@angular/core';
import { Color } from '../types/color';
import { Observable, delay, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../types/product';
import { ProductResponse } from '../types/productResponse';
import { RecipeResponse } from '../types/recipeResponse';
import { Recipe } from '../types/recipe';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }

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
    const url = 'https://dummyjson.com/products'
    return this.http.get<ProductResponse>(url).pipe(map(resp => resp.products))
  }

  getRecipes(): Observable<Recipe[]>{
    const url = 'https://dummyjson.com/recipes'
    return this.http.get<RecipeResponse>(url).pipe(map(resp => resp.recipes))
  }
}
