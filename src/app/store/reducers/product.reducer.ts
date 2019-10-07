import { ProductState } from './../state/product.state';
import { initialState } from '../state/product.state';
import * as product from '../actions/product.actions';

export function productReducer(state = initialState, action: product.ProductsLoadedAction): ProductState {

  switch (action.type) {
    case product.LOAD_PRODUCTS:
      return {
        ...state
      };
    case product.LOADED_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
}
