import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/types/product.model';
import { productState } from 'src/app/state/product/product.selectors';
import * as ProductActions from 'src/app/state/product/product.actions'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  constructor(private store: Store<{products: ReadonlyArray<Product>}>) {}

  products$: Observable<readonly Product[]> = this.store.select(productState)

  addProduct() {
    const rnd = Date.now().toString()
    const product: Product = {
      id: rnd,
      name: 'product ' + rnd,
      price: 100
    }

    this.store.dispatch(ProductActions.addProduct({product}))
  }

  removeProduct(id:string) {
    this.store.dispatch(ProductActions.removeProduct({id}))
  }
}
