import { CommerceState } from './../state/commerce.state';
import { ProductOfOrderModel } from 'src/app/core/models/product-of-order.interface';
import { CommerceActionTypes } from './../actions/commerce.actions';
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
  const productOrder = {
    product_id: action.payload.product_id,
    hangar_id: action.payload.hangar_id,
    quantity: action.payload.quantity,
    price: action.payload.price
  };
  return tassign(state,
    {
      products_order: state.products_order.concat(productOrder),
      totalPrice: state.totalPrice + productOrder.price,
      totalProducts: state.totalProducts + productOrder.quantity
    });
  /* if (!isProductInOrder(state, action.payload)) {
    return tassign(state,
      {
        products_orders: state.products_order.concat(action.payload),
        totalPrice: state.totalPrice + action.payload.price,
        totalProducts: state.totalProducts + 1
      });
  } else {
    return tassign(state,
      {
        products_orders: state.products_order,
        totalPrice: state.totalPrice + action.payload.price,
        totalProducts: state.totalProducts + 1
      }
    );
  } */
}

// TODO: hay que controlar que al quitar un producto se quite bien el precio porque probablemente haya introducido más de uno.
function removeProduct(state, action) {
  return tassign(state,
    {
      products_order: state.products_order.filter(product => product.product_id !== action.payload.product_id),
      totalProducts: state.totalProducts,
      totalPrice: state.totalPrice - action.payload.price
    }
  );
}

function isProductInOrder(state: CommerceState, productOrder: ProductOfOrderModel) {
  if (state.products_order.length > 0) {
    return (state.products_order.filter(product =>
       product.product_id === productOrder.product_id && product.hangar_id === productOrder.hangar_id).length > 0);
  }
  return false;
}

