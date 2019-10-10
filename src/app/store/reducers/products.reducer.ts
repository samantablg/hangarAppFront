import * as product from '../actions';
import { ProductsActionTypes } from '../actions';
import { initialState } from '../state/products.state';
import { ProductsState } from '../state/products.state';

export function productsReducer(state = initialState, action: product.ProductsLoaded): ProductsState {

  switch (action.type) {
    case ProductsActionTypes.LOAD_PRODUCTS:
      return {
        ...state,
        loading: true
      };
    case ProductsActionTypes.LOADED_PRODUCTS:
      return {
        ...state,
        loading: false,
        loaded: true,
        products: [...action.payload],
      };
      case ProductsActionTypes.LOAD_PRODUCTS_FAIL:
      return {
        ...state,
        loaded: false,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
}
