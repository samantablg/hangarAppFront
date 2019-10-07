import { ProductModel } from 'src/app/core/models/product.interface';

export interface ProductState {
  products: ProductModel[];
}

export const initialState: ProductState = {
  products: null
};

/*
export interface ProductState {
  products: Page<ProductModel>;
}
*/
