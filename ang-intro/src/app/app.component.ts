import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { PostComponent } from './post/post.component';
import { ProductService } from './services/api/products/product.service';
import { ProductRepresentation } from './services/api/models/product-representation';
import { HttpErrorResponse} from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnInit{
  title = 'ang-intro';
  parentMessage: string = 'Message from parent component';
  
  // message: string;

  // fromChildOutput: string

  // @ViewChild(PostComponent) childComp: PostComponent;

  constructor(private service: ProductService) {

  }

  ngOnInit(): void {
    // The limit parameter has a default value but you can pass a value i.e. limit=5
    this.service.getAllProductsWithLimit()
    .subscribe({
      next: (data) => {
        console.log(data);
      },

      error: (err: HttpErrorResponse) => {
        console.error('An error occured:', err);  
      }
    }); 

    this.addProduct()
  }

  addProduct() {
    const product: ProductRepresentation  = {
      title: 'My Product',
      description: 'Product Desc',
      price: 12,
      category: 'Any Category',
      image: 'https://some-image.jpg'
    };

    this.service.addProduct(product)
    .subscribe({
      next: (data) => {
        console.log(data);
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

  ngAfterViewInit(): void {
    // console.log(this.childComp);
    // this.message = this.childComp.childMessage;
  }

  receiveMessage($event: string) {
    // console.log($event);
    // this.fromChildOutput = $event
    
  }
}
