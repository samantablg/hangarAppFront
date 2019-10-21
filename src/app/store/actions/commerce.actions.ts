import { ProductOfOrderModel } from './../../core/models/product-of-order.interface';
import { OrderModel } from './../../core/models/order.interface';
import { ProductModel } from './../../core/models/product.interface';
import { Action } from '@ngrx/store';

export enum CommerceActionTypes {
  ADD_PRODUCT_ORDER = '[COMMERCE] ADD_PRODUCT_ORDER',
  COMMERCE_FAIL = '[COMMERCE] COMMERCE_FAIL',
  REMOVE_PRODUCT_ORDER = '[COMMERCE] REMOVE_PRODUCT_ORDER',
  SEND_ORDER = '[COMMERCE] SEND_ORDER'
}

export class AddProductCommerce implements Action {
  readonly type = CommerceActionTypes.ADD_PRODUCT_ORDER;

  constructor(public payload: ProductOfOrderModel) {}
}

export class CommerceFail implements Action {
  type = CommerceActionTypes.COMMERCE_FAIL;

  constructor(public payload: any) {}
}

export class RemoveProductCommerce implements Action {
  readonly type = CommerceActionTypes.REMOVE_PRODUCT_ORDER;

  constructor(public payload: ProductOfOrderModel) {}
}

export class SendOrderCommerce implements Action {
  readonly type = CommerceActionTypes.SEND_ORDER;

  constructor(public payload: OrderModel) {}
}

export type CommerceActions = AddProductCommerce |
                              CommerceFail |
                              RemoveProductCommerce |
                              SendOrderCommerce;
