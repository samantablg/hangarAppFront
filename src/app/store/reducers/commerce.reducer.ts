import { ProductOfOrderModel } from 'src/app/core/models/product-of-order.interface';
import { CommerceActionTypes } from './../actions/commerce.actions';
import { CommerceState } from './../state/commerce.state';
import { initialState } from '../state/commerce.state';
import * as commerce from './../actions/commerce.actions';
import { tassign } from 'tassign';

export function commerceReducer(state = initialState, action: commerce.CommerceActions): CommerceState {

  switch (action.type) {
    case CommerceActionTypes.ADD_PRODUCT:
      return addProductToOrder(state, action);
    case CommerceActionTypes.ADD_PRODUCT_FAIL:
      return {
        ...state,
        error: action.payload
      };
     case CommerceActionTypes.REMOVE_PRODUCT:
       return removeProduct(state, action);
    default:
      return state;
  }
}

function addProductToOrder(state, action) {
  if (!isProductInOrder(state, action.payload)) {
    return tassign(state,
      {
        products_order: state.products_order.concat(action.payload),
        total_price: state.total_price + action.payload.price,
        total_products: state.products_order.length + 1
      });
  } else {
    return tassign(state,
      {
        products_order: state.products_order,
        total_price: state.total_price + action.payload.price,
        total_products: state.products_order.length + 1
      }
    );
  }
}

function removeProduct(state: CommerceState, action: commerce.CommerceActions) {
  return tassign(state,
    {
      products_order: state.products_order.filter(product => product.product_id !== action.payload.product_id),
      total_products: state.products_order.length - 1,
      total_price: state.total_price - action.payload.price
    }
  );
}

function isProductInOrder(state: CommerceState, productOrder: ProductOfOrderModel): boolean {
  if (state.products_order.length > 0) {
    return (state.products_order.filter(product =>
       product.product_id === productOrder.product_id && product.hangar_id === productOrder.hangar_id).length > 0);
  }
  return false;
}
