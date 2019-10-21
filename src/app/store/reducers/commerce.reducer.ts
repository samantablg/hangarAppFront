import { CommerceState } from './../state/commerce.state';
import { ProductOfOrderModel } from 'src/app/core/models/product-of-order.interface';
import { CommerceActionTypes } from './../actions/commerce.actions';
import { initialState } from '../state/commerce.state';
import * as commerce from './../actions/commerce.actions';
import { tassign } from 'tassign';

export function commerceReducer(state = initialState, action: commerce.CommerceActions): CommerceState {
  switch (action.type) {
    case CommerceActionTypes.ADD_PRODUCT_ORDER:
      return addProductToOrder(state, action);
    case CommerceActionTypes.REMOVE_PRODUCT_ORDER:
      return removeProduct(state, action);
    case CommerceActionTypes.SEND_ORDER:
      return sendOrder(state, action);
    case CommerceActionTypes.COMMERCE_FAIL:
      return failOrder(state, action);
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
  if (isProductInOrder(state, productOrder) === undefined) {
    return tassign(state,
      {
        order: {
          productsOfOrder: state.order.productsOfOrder.concat(productOrder),
          totalPrice: state.order.totalPrice + action.payload.price,
          totalProducts: state.order.totalProducts + 1
        }
      });
  } else {
    return tassign(state,
      {
        order: {
          productsOfOrder: incrementProductOfOrder(state, action),
          totalPrice: state.order.totalPrice + productOrder.price,
          totalProducts: state.order.totalProducts + productOrder.quantity
        }
    });
  }
}

function removeProduct(state, action) {
  if (isProductInOrder(state, action.payload) === undefined) {
    return { ...state};
  } else {
    const product = isProductInOrder(state, action.payload);
    console.log(product);
    return tassign(state, {
      order: {
        productsOfOrder: removeProductOfOrder(state, action),
        totalPrice: state.order.totalPrice - product.quantity * product.price,
        totalProducts: state.order.totalProducts - product.quantity
      }
    });
  }
}

function isProductInOrder(state: CommerceState, productOrder: ProductOfOrderModel): ProductOfOrderModel | undefined {
  return (state.order.productsOfOrder.find(product =>
    product.product_id === productOrder.product_id && product.hangar_id === productOrder.hangar_id));
}

function sendOrder(state, action) {
  return tassign(state,
    {
      order: {
        productsOfOrder: [],
        totalPrice: 0,
        totalProducts: 0
      }
    }
  );
}

function failOrder(state, action) {
  return tassign(state,
    {
      order: {
        productsOfOrder: [],
        totalPrice: 0,
        totalProducts: 0
      },
      error: action.payload
    }
  );
}

function incrementProductOfOrder(state, action) {
  const index = state.order.productsOfOrder.findIndex(
    (product) => {
      return product.hangar_id === action.payload.hangar_id && product.product_id === action.payload.product_id;
    });
  const productsOfOrder = state.order.productsOfOrder.slice();
  const productOfOrder = productsOfOrder[index];
  productOfOrder.quantity += productOfOrder.quantity;
  return productsOfOrder.splice(index, 1, productOfOrder);
}

function removeProductOfOrder(state, action) {
  const index = state.order.productsOfOrder.findIndex(
    (product) => {
      return product.hangar_id === action.payload.hangar_id && product.product_id === action.payload.product_id;
    });
  const productsOfOrder = state.order.productsOfOrder.slice();
  return productsOfOrder.splice(index, 1);
}
