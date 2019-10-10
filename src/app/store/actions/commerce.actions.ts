import { OrderModel } from './../../core/models/order.interface';
import { ProductModel } from './../../core/models/product.interface';
import { Action } from '@ngrx/store';

export enum CommerceActionTypes {
  ADD_PRODUCT = '[COMMERCE] ADD_PRODUCT',
  ADD_PRODUCT_FAIL = '[COMMERCE] ADD_PRODUCT',
  REMOVE_PRODUCT = '[COMMERCE] REMOVE_PRODUCT',
  SEND_ORDER = '[COMMERCE] SEND_ORDER'
}

export class AddProductCommerce implements Action {
  readonly type = CommerceActionTypes.ADD_PRODUCT;

  constructor(public payload: ProductModel) {}
}

export class AddProductCommerceFail implements Action {
  type = CommerceActionTypes.ADD_PRODUCT_FAIL;

  constructor(public payload: any) {}
}

export class RemoveProductCommerce implements Action {
  readonly type = CommerceActionTypes.REMOVE_PRODUCT;

  constructor(public payload: ProductModel) {}
}

export class SendOrderCommerce implements Action {
  readonly type = CommerceActionTypes.SEND_ORDER;

  constructor(public payload: OrderModel) {}
}
