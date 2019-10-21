import { ProductOfOrderModel } from './../../core/models/product-of-order.interface';
import { OrderModel } from 'src/app/core/models/order.interface';

export interface CommerceState {
  order: OrderModel | null;
  error: any;
}

export const initialState: CommerceState = {
  order: {
    productsOfOrder: [],
    totalPrice: 0,
    totalProducts: 0
  },
  error: null
};

