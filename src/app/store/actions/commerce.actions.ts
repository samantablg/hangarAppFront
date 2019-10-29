import { ProductOfOrderModel } from './../../core/models/product-of-order.interface';
import { OrderModel } from './../../core/models/order.interface';
import { Action } from '@ngrx/store';

export enum CommerceActionTypes {
  ADD_PRODUCT_ORDER = '[COMMERCE] ADD_PRODUCT_ORDER',
  ADDED_PRODUCT_ORDER = '[COMMERCE] ADDED_PRODUCT_ORDER',
  REMOVE_PRODUCT_ORDER = '[COMMERCE] REMOVE_PRODUCT_ORDER',
  INCREASE_PRODUCT_ORDER = '[COMMERCE] INCREASE_PRODUCT_ORDER',
  INCREASED_PRODUCT_ORDER = '[COMMERCE] INCREASED_PRODUCT_ORDER',
  DECREASE_PRODUCT_ORDER = '[COMMERCE] DECREASE_PRODUCT_ORDER',
  DIMINISHED_PRODUCT_ORDER = '[COMMERCE] DIMINISHED_PRODUCT_ORDER',
  NOTHING_CHANGE = '[COMMERCE] NOTHING_CHANGE',
  NO_CHANGE_ORDER = '[COMMERCE] NO_CHANGE_ORDER',
  SEND_ORDER = '[COMMERCE] SEND_ORDER',
  COMMERCE_FAIL = '[COMMERCE] COMMERCE_FAIL',
}

export class AddProductOfOrder implements Action {
  readonly type = CommerceActionTypes.ADD_PRODUCT_ORDER;
  constructor(public payload: ProductOfOrderModel) {}
}

export class AddedProductOfOrder implements Action {
  readonly type = CommerceActionTypes.ADDED_PRODUCT_ORDER;
  constructor(public payload: ProductOfOrderModel) {}
}
export class RemoveProductOfOrder implements Action {
  readonly type = CommerceActionTypes.REMOVE_PRODUCT_ORDER;
  constructor(public payload: ProductOfOrderModel) {}
}

export class IncreaseProductOfOrder implements Action {
  readonly type = CommerceActionTypes.INCREASE_PRODUCT_ORDER;
  constructor(public payload: ProductOfOrderModel) {}
}

export class IncreasedProductOfOrder implements Action {
  readonly type = CommerceActionTypes.INCREASED_PRODUCT_ORDER;
  constructor(public payload: ProductOfOrderModel) {}
}

export class DecreaseProductOfOrder implements Action {
  readonly type = CommerceActionTypes.DECREASE_PRODUCT_ORDER;
  constructor(public payload: ProductOfOrderModel) {}
}

export class DiminishedProductOfOrder implements Action {
  readonly type = CommerceActionTypes.DIMINISHED_PRODUCT_ORDER;
  constructor(public payload: ProductOfOrderModel) {}
}

export class NoChangeOrder implements Action {
  readonly type = CommerceActionTypes.NO_CHANGE_ORDER;
}

export class SendOrderCommerce implements Action {
  readonly type = CommerceActionTypes.SEND_ORDER;
  constructor(public payload: OrderModel) {}
}

export class CommerceFail implements Action {
  type = CommerceActionTypes.COMMERCE_FAIL;
  constructor(public payload: any) {}
}

export type CommerceActions = AddProductOfOrder |
                              AddedProductOfOrder |
                              RemoveProductOfOrder |
                              IncreaseProductOfOrder |
                              IncreasedProductOfOrder |
                              DecreaseProductOfOrder |
                              DiminishedProductOfOrder |
                              NoChangeOrder |
                              SendOrderCommerce |
                              CommerceFail;
