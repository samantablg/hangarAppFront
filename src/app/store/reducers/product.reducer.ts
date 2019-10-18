import * as product from '../actions/product.actions';
import { ProductsActionTypes } from '../actions/product.actions';
import { initialState } from '../state/products.state';
import { ProductsState } from '../state/products.state';

export function productReducer(state = initialState, action: product.ProductsLoaded): ProductsState {

  // TODO: cambiar reducers
  switch (action.type) {
    case ProductsActionTypes.LOAD_PRODUCTS:
      return {
        ...state,
        loading: true,
        productsOfHangar: [],
        prices: []
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
    case ProductsActionTypes.DELETE_PRODUCT:
      return {
        ...state
      };
    case ProductsActionTypes.NEW_PRODUCT:
      return {
        ...state,
      };
      case ProductsActionTypes.SELECT_PRODUCT:
        return {
          ...state,
        };
    case ProductsActionTypes.EDIT_PRODUCT:
      return {
        ...state,
      };
      case ProductsActionTypes.LOAD_PRODUCTS_OF_HANGAR:
        return {
          ...state
        };
    case ProductsActionTypes.LOADED_PRODUCTS_OF_HANGAR:
      return {
        ...state,
        productsOfHangar: [ ...action.payload]
      };
    case ProductsActionTypes.DELETE_PRODUCT_OF_HANGAR:
      return {
        ...state
      };
    case ProductsActionTypes.SAVE_PRODUCT_HANGAR:
      return {
        ...state,
      };
    case ProductsActionTypes.EDIT_PRODUCT_HANGAR:
      return {
        ...state,
      };
    case ProductsActionTypes.LOAD_PRICES_OF_PRODUCT:
      return {
        ...state
      };
    case ProductsActionTypes.LOADED_PRICES_OF_PRODUCT:
      return {
        ...state,
        prices: [...action.payload]
      };
    case ProductsActionTypes.NEW_PRICE:
      return {
        ...state,
      };
    default:
      return state;
  }
}
