import { Component } from '@angular/core';
import { ProductRepresentation } from '../services/api/models/product-representation';
import { ProductService } from '../services/api/products/product.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent {
  
  product: ProductRepresentation = {};

  constructor (
    private service: ProductService,
    private router: Router
    ) {

  }

  onSubmit() {
    this.service.addProduct(this.product)
    .subscribe({
      next: (data) => {
        this.router.navigate(['products'])
      },

      error: (err: HttpErrorResponse) => {
        if (err instanceof ErrorEvent) {
          console.error('An error occurred:', err);
        } else {
          // Server side error
          console.error(`Server returned status code ${err.status}, error message: ${err.message}`);
        } 
      }
    });
    
  }
}
