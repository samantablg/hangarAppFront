import { PriceModel } from './../../core/models/price.interface';
import { Action } from '@ngrx/store';
import { ProductModel } from '../../core/models/product.interface';
import { ProductOfHangarModel } from 'src/app/core/models/product-hangar.interface';

export const LOAD_PRODUCTS_FAIL = '[PRODUCT] LOAD_PRODUCTS_FAIL';

export enum ProductsActionTypes {
  LOAD_PRODUCTS = '[PRODUCT] LOAD_PRODUCTS',
  LOADED_PRODUCTS = '[PRODUCT] LOADED_PRODUCTS',
  LOAD_PRODUCTS_FAIL = '[PRODUCT] LOAD_PRODUCTS_FAIL',
  NEW_PRODUCT = '[PRODUCT] NEW_PRODUCT',
  SELECT_PRODUCT = '[PRODUCT] SELECT_PRODUCT',
  EDIT_PRODUCT = '[PRODUCT] EDIT_PRODUCT',
  CHECK_PRODUCT_DELETED = '[PRODUCT] CHECK_PRODUCT_DELETED',
  DELETE_PRODUCT = '[PRODUCT] DELETE_PRODUCT',
  GET_PRICES_OF_PRODUCT = '[PRODUCT] GET_PRICES_OF_PRODUCT',
  LOAD_PRODUCTS_OF_HANGAR = '[PRODUCT] LOAD_PRODUCTS_OF_HANGAR',
  LOADED_PRODUCTS_OF_HANGAR = '[PRODUCT] LOADED_PRODUCTS_OF_HANGAR',
  DELETE_PRODUCT_OF_HANGAR = '[PRODUCT] DELETE_PRODUCT_OF_HANGAR',
  SAVE_PRODUCT_HANGAR = '[PRODUCT] SAVE_PRODUCT_HANGAR',
  EDIT_PRODUCT_HANGAR = '[PRODUCT] EDIT_PRODUCT_HANGAR',
  LOAD_PRICES_OF_PRODUCT = '[PRODUCT] LOAD_PRICES_OF_PRODUCT',
  LOADED_PRICES_OF_PRODUCT = '[PRODUCT] LOADED_PRICES_OF_PRODUCT',
  NEW_PRICE = '[PRODUCT] NEW_PRICE',
  VALIDATE_PRODUCT = '[PRODUCT] VALIDATE_PRODUCT',
  IS_LOADED = '[PRODUCT] IS_LOADED'
}

export class IsProductsLoaded implements Action {
  readonly type = ProductsActionTypes.IS_LOADED;
}

export class ProductsLoad implements Action {
  readonly type = ProductsActionTypes.LOAD_PRODUCTS;
}

export class ProductsLoaded implements Action {
  readonly type = ProductsActionTypes.LOADED_PRODUCTS;
  constructor(public payload: ProductModel[]) {}
}

export class ProductsLoadFail implements Action {
  readonly type = ProductsActionTypes.LOAD_PRODUCTS_FAIL;
  constructor(public payload: any) {}
}

export class NewProduct implements Action {
  readonly type = ProductsActionTypes.NEW_PRODUCT;
  constructor(public payload: ProductModel) {}
}

export class SelectProduct implements Action {
  readonly type = ProductsActionTypes.SELECT_PRODUCT;
  constructor(public payload: number) {}
}

export class EditProduct implements Action {
  readonly type = ProductsActionTypes.EDIT_PRODUCT;
  constructor(public payload: ProductModel) {}
}

export class DeleteProduct implements Action {
  readonly type = ProductsActionTypes.DELETE_PRODUCT;
  constructor(public payload: ProductModel) {}
}

export class CheckIfProductCanBeDeleted implements Action {
  readonly type = ProductsActionTypes.CHECK_PRODUCT_DELETED;
  constructor(public payload: ProductModel) {}
}

export class GetPricesOfProduct implements Action {
  readonly type = ProductsActionTypes.GET_PRICES_OF_PRODUCT;
  constructor(public payload: number) {}
}

export class LoadProductsOfHangar implements Action {
  readonly type = ProductsActionTypes.LOAD_PRODUCTS_OF_HANGAR;
  constructor(public payload: number) {}
}

export class LoadedProductsOfHangar implements Action {
  readonly type = ProductsActionTypes.LOADED_PRODUCTS_OF_HANGAR;
  constructor(public payload: ProductOfHangarModel[]) {}
}

export class DeleteProductOfHangar implements Action {
  readonly type = ProductsActionTypes.DELETE_PRODUCT_OF_HANGAR;
  constructor(public payload: ProductOfHangarModel) {}
}

export class SaveProductHangar implements Action {
  readonly type = ProductsActionTypes.SAVE_PRODUCT_HANGAR;
  constructor(public payload: ProductOfHangarModel) {}
}

export class EditProductOfHangar implements Action {
  readonly type = ProductsActionTypes.EDIT_PRODUCT_HANGAR;
  constructor(public payload: ProductOfHangarModel) {}
}

export class PricesOfProductLoad implements Action {
  readonly type = ProductsActionTypes.LOAD_PRICES_OF_PRODUCT;
  constructor(public payload: number) {}
}

export class PricesOfProductLoaded implements Action {
  readonly type = ProductsActionTypes.LOADED_PRICES_OF_PRODUCT;
  constructor(public payload: PriceModel[]) {}
}

export class NewPriceOfProduct implements Action {
  readonly type = ProductsActionTypes.NEW_PRICE;
  constructor(public payload: PriceModel) {}
}

export class ValidateProduct implements Action {
  readonly type = ProductsActionTypes.VALIDATE_PRODUCT;
  constructor(public payload: string) {}
}

export type ProductActions =  IsProductsLoaded |
                              ProductsLoad |
                              ProductsLoaded |
                              ProductsLoadFail |
                              NewProduct |
                              SelectProduct |
                              EditProduct |
                              DeleteProduct |
                              CheckIfProductCanBeDeleted |
                              GetPricesOfProduct |
                              LoadProductsOfHangar |
                              LoadedProductsOfHangar |
                              DeleteProductOfHangar |
                              SaveProductHangar |
                              EditProductOfHangar |
                              PricesOfProductLoad |
                              PricesOfProductLoaded |
                              NewPriceOfProduct |
                              ValidateProduct;
