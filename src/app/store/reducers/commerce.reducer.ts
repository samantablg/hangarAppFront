import { CommerceActionTypes } from './../actions/commerce.actions';
import { CommerceState } from './../state/commerce.state';
import { initialState } from '../state/commerce.state';
import * as commerce from '../actions/commerce.actions';
import { ProductModel } from 'src/app/core/models/product.interface';
import { productsReducer } from './products.reducer';

export function commerceReducer(state = initialState, action): CommerceState {

  switch (action.type) {
    case CommerceActionTypes.ADD_PRODUCT:
      return {
        ...state,
        products_order: state.products_order.concat(action.payload),
        total_products: state.products_order.length + 1,
        total_price: state.total_price + action.payload.price,
      };
    case CommerceActionTypes.ADD_PRODUCT_FAIL:
      return {
        ...state,
        error: action.payload
      };
     case CommerceActionTypes.REMOVE_PRODUCT:
       return {
         ...state,
         products_order: state.products_order.filter(product => product.product_id !== action.payload.id),
         total_products: state.products_order.length - 1
       };
    default:
      return state;
  }
}
