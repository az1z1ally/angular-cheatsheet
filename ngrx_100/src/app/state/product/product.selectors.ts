import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Product } from "src/app/types/product.model";

export const productState = createFeatureSelector<ReadonlyArray<Product>>("products")