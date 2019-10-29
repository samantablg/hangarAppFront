import { CommerceState } from './../state/commerce.state';
import { createSelector } from '@ngrx/store';
import { State } from './../state/index';

export const selectCommerceState = (state: State) => state.commerce;

export const selectOrder = createSelector(
  selectCommerceState,
  (state: CommerceState) => state.order
);

export const selectTotalPrice = createSelector(
  selectCommerceState,
  (state: CommerceState) => state.order.totalPrice
);

export const selectTotalProducts = createSelector(
  selectCommerceState,
  (state: CommerceState) => state.order.totalProducts
);

export const selectProductsOfOrder = createSelector(
  selectCommerceState,
  (state: CommerceState) => state.order.productsOfOrder
);
