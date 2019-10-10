import { ProductModel } from 'src/app/core/models/product.interface';

export interface ProductsState {
  products: ProductModel[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const initialState: ProductsState = {
  products: [],
  loaded: false,
  loading: false,
  error: null
};

/*
export interface ProductState {
  products: Page<ProductModel>;
}
*/
