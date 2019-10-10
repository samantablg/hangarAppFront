import { ProductOfOrderModel } from './../../core/models/product-of-order.interface';

export interface CommerceState {
  products_order: ProductOfOrderModel[];
  total_price: number;
  total_products: number;
  error: any;
}

export const initialState: CommerceState = {
  products_order: [],
  total_price: 0,
  total_products: 0,
  error: null
};

