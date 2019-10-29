import { CommerceState } from '../state/commerce.state';
import { ProductOfOrderModel } from 'src/app/core/models/product-of-order.interface';
import { CommerceActionTypes } from '../actions/commerce.actions';
import { initialState } from '../state/commerce.state';
import * as commerce from '../actions/commerce.actions';
import { tassign } from 'tassign';

export function commerceReducer(state = initialState, action: commerce.CommerceActions): CommerceState {
  switch (action.type) {
    case CommerceActionTypes.ADD_PRODUCT_ORDER:
      return { ...state} ;
    case CommerceActionTypes.ADDED_PRODUCT_ORDER:
      return addProductToOrder(state, action);
    case CommerceActionTypes.REMOVE_PRODUCT_ORDER:
      return removeProduct(state, action);
    case CommerceActionTypes.INCREASE_PRODUCT_ORDER:
      return { ...state};
    case CommerceActionTypes.INCREASED_PRODUCT_ORDER:
      return increaseProductOfOrder(state, action);
    case CommerceActionTypes.DECREASE_PRODUCT_ORDER:
      return { ...state};
    case CommerceActionTypes.DIMINISHED_PRODUCT_ORDER:
      return decreaseProductOfOrder(state, action);
    case CommerceActionTypes.NO_CHANGE_ORDER:
      return { ...state};
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
  return tassign(state, {
    order: {
      productsOfOrder: state.order.productsOfOrder.concat(productOrder),
      totalPrice: state.order.totalPrice + action.payload.price,
      totalProducts: state.order.totalProducts + 1
    }
  });
}

function removeProduct(state, action) {
  const product = findProductInOrder(state, action.payload);
  return tassign(state, {
    order: {
      productsOfOrder: state.order.productsOfOrder.filter(prod => prod != action.payload),
      totalPrice: state.order.totalPrice - product.quantity * product.price,
      totalProducts: state.order.totalProducts - product.quantity
    }
  });
}

function increaseProductOfOrder(state, action) {
  const product = findProductInOrder(state, action.payload);
  return tassign(state, {
    order: {
      productsOfOrder: incrementProductOfOrder(state.order.productsOfOrder, action.payload),
      totalPrice: state.order.totalPrice + product.price,
      totalProducts: state.order.totalProducts + 1 // añadimos uno a uno
    }
  });
}

function incrementProductOfOrder(productsOfOrder: ProductOfOrderModel[], product: ProductOfOrderModel): ProductOfOrderModel[] {
  const _productsOfOrder = productsOfOrder.slice();
  return _productsOfOrder.map( prod => {
    if (prod.hangar_id === product.hangar_id && prod.product_id === product.product_id) {
      prod.quantity = prod.quantity + 1;
      return prod;
    } else {
      return prod;
    }
  });
}

function decreaseProductOfOrder(state, action) {
  const product = findProductInOrder(state, action.payload);
  return tassign(state, {
    order: {
      productsOfOrder: decrementProductOfOrder(state.order.productsOfOrder, action.payload),
      totalPrice: state.order.totalPrice - product.price,
      totalProducts: state.order.totalProducts - 1 // quitamos uno a uno
    }
  });
}

function decrementProductOfOrder(productsOfOrder: ProductOfOrderModel[], product: ProductOfOrderModel): ProductOfOrderModel[] {
  const _productsOfOrder = productsOfOrder.slice();
  return _productsOfOrder.map( prod => {
    if (prod.hangar_id === product.hangar_id && prod.product_id === product.product_id) {
      prod.quantity = prod.quantity - 1;
      return prod;
    } else {
      return prod;
    }
  });
}

function sendOrder(state, action) {
  return tassign(state, {
    order: {
      productsOfOrder: [],
      totalPrice: 0,
      totalProducts: 0
    }
  });
}

function failOrder(state, action) {
  return tassign(state, {
    order: {
      productsOfOrder: [],
      totalPrice: 0,
      totalProducts: 0
    },
    error: action.payload
  });
}

function findProductInOrder(state: CommerceState, productOrder: ProductOfOrderModel): ProductOfOrderModel | undefined {
  return (state.order.productsOfOrder.find(product =>
    product.product_id === productOrder.product_id && product.hangar_id === productOrder.hangar_id));
}
