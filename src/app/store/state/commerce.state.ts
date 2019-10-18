import { ProductOfOrderModel } from './../../core/models/product-of-order.interface';

export interface CommerceState {
  products_order: ProductOfOrderModel[];
  totalPrice: number;
  totalProducts: number;
  error: any;
}

export const initialState: CommerceState = {
  products_order: [],
  totalPrice: 0,
  totalProducts: 0,
  error: null
};

