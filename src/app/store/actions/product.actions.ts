import { Action } from '@ngrx/store';
import { ProductModel } from './../../core/models/product.interface';

export const LOAD_PRODUCTS = '[PRODUCT] LOAD_PRODUCTS';
export const LOADED_PRODUCTS = '[PRODUCT] LOADED_PRODUCTS';

export class ProductsLoadAction implements Action {
  type = LOAD_PRODUCTS;
}

export class ProductsLoadedAction implements Action {
  type = LOADED_PRODUCTS;

  constructor(public payload: ProductModel[]) {}
}
