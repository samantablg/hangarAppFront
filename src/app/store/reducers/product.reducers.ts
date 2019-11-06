import * as products from '../actions/product.actions';
import { ProductsActionTypes } from '../actions/product.actions';
import { initialState } from '../state/products.state';
import { ProductsState } from '../state/products.state';
import { ProductModel } from 'src/app/core/models/product.interface';
import { tassign } from 'tassign';

export function productReducer(state = initialState, action: products.ProductActions): ProductsState {

  // TODO: cambiar reducers
  switch (action.type) {
    case ProductsActionTypes.LOAD_PRODUCTS:
      return {
        ...state,
        loading: true,
        productsOfHangar: [],
        prices: [],
        isProduct: false
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
    case ProductsActionTypes.IS_LOADED:
      return {
        ...state
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
        productsOfHangar: action.payload
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
        prices: state.prices.concat(action.payload)
      };
    case ProductsActionTypes.NEW_PRICE:
      return {
        ...state,
      };
    case ProductsActionTypes.VALIDATE_PRODUCT:
      return findProduct(state, action);
    default:
      return state;
  }
}

function findProduct(state, action) {
  const productResult: ProductModel | undefined = state.products.find(
    // tslint:disable-next-line: no-shadowed-variable
    (product: ProductModel | undefined) => product.name === action.payload);
  return tassign(state,
    {
      isProduct: (productResult !== undefined),
    }
  );
}
