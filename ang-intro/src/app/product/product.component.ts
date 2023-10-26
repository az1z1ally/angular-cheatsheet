import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ProductService } from '../services/api/products/product.service'
import { ProductRepresentation } from '../services/api/models/product-representation';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products: ProductRepresentation[] = [];

  constructor(private service: ProductService) {

  }

  ngOnInit(): void {
    // The limit parameter has a default value but you can pass a value i.e. limit=5
    this.service.getAllProductsWithLimit()
    .subscribe({
      next: (data) => {
        this.products = data
      },

      error: (err: HttpErrorResponse) => {
        console.error('An error occured:', err);  
      }
    }); 
 
  }


}
