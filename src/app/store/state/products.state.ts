import { PriceModel } from 'src/app/core/models/price.interface';
import { ProductOfHangarModel } from './../../core/models/product-hangar.interface';
import { ProductModel } from 'src/app/core/models/product.interface';

export interface ProductsState {
  products: ProductModel[] | [];
  loaded: boolean;
  loading: boolean;
  error: any;
  productsOfHangar: ProductOfHangarModel[] | [];
  prices: PriceModel[] | [];
}

export const initialState: ProductsState = {
  products: [],
  loaded: false,
  loading: false,
  error: null,
  productsOfHangar: [],
  prices: []
};

/*
export interface ProductState {
  products: Page<ProductModel>;
}
*/
