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
       return {...state }; // removeProduct(state, action);
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
  console.log(isProductInOrder(state, productOrder));
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
          productsOfOrder: modifyProductOfOrder(state, action),
          totalPrice: state.order.totalPrice + productOrder.price,
          totalProducts: state.order.totalProducts + productOrder.quantity
        }
    });
  }
}

// TODO: hay que controlar que al quitar un producto se quite bien el precio porque probablemente haya introducido más de uno.
/* function removeProduct(state, action) {
  return tassign(state,
    {
      products_order: state.products_order.filter(product => product.product_id !== action.payload.product_id),
      totalProducts: state.totalProducts,
      totalPrice: state.totalPrice - action.payload.price
    }
  );
} */

function isProductInOrder(state: CommerceState, productOrder: ProductOfOrderModel): ProductOfOrderModel | undefined {
  console.log('state: ' + state.order.productsOfOrder);
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

function modifyProductOfOrder(state, action) {
  const index = state.order.productsOfOrder.findIndex(
    (product) => product.hangar_id === action.payload.hangar_id && product.product_id === action.payload.product_id);
  const productsOfOrder = state.order.productsOfOrder.slice();
  const productOfOrder = productsOfOrder[index];
  productOfOrder.quantity += productOfOrder.quantity;
  productsOfOrder.splice(index, 1, productOfOrder);
  return productsOfOrder;
}
