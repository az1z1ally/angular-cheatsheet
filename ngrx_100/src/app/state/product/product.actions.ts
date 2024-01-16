import { createAction, props } from "@ngrx/store";
import { Product } from "src/app/types/product.model";


export const addProduct = createAction(
    '[Product] Add Product',
    props<{product: Product}>()
)

export const removeProduct = createAction(
    '[Product] Remove Product',
    props<{id:string}>()
)