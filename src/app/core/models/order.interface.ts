import { ProductOfOrderModel } from './product-of-order.interface';

export interface OrderModel {
  productsOfOrder: ProductOfOrderModel[];
  totalPrice: number;
  totalProducts: number;
}
