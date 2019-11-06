import { ProductOfHangarModel } from 'src/app/core/models/product-hangar.interface';
import { ProductModel } from 'src/app/core/models/product.interface';
import { PriceModel } from 'src/app/core/models/price.interface';


export interface ProductsState {
  products: ProductModel[];
  loaded: boolean;
  loading: boolean;
  error: any;
  productsOfHangar: any; // ProductOfHangarModel[]
  prices: PriceModel[];
  isProduct: boolean;
}

export const initialState: ProductsState = {
  products: [],
  loaded: false,
  loading: false,
  error: null,
  productsOfHangar: [],
  prices: [],
  isProduct: false
};
