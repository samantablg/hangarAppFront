import { Action } from '@ngrx/store';
import { ProductModel } from '../../core/models/product.interface';

export const LOAD_PRODUCTS_FAIL = '[PRODUCT] LOAD_PRODUCTS_FAIL';

export enum ProductsActionTypes {
  LOAD_PRODUCTS = '[PRODUCT] LOAD_PRODUCTS',
  LOADED_PRODUCTS = '[PRODUCT] LOADED_PRODUCTS',
  LOAD_PRODUCTS_FAIL = '[PRODUCT] LOAD_PRODUCTS_FAIL'
}

export class ProductsLoad implements Action {
  readonly type = ProductsActionTypes.LOAD_PRODUCTS;
}

export class ProductsLoaded implements Action {
  type = ProductsActionTypes.LOADED_PRODUCTS;

  constructor(public payload: ProductModel[]) {}
}

export class ProductsLoadFail implements Action {
  type = ProductsActionTypes.LOAD_PRODUCTS_FAIL;

  constructor(public payload: any) {}
}
