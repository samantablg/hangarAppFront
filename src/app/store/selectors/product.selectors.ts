import { State } from '../state/index';
import { ProductsState } from '../state/products.state';
import { createSelector } from '@ngrx/store';
import * as fromRouter from './router.selectors';
import { ProductModel } from 'src/app/core/models/product.interface';

export const selectProductState = (state: State) => state.product;

export const selectProductList = createSelector(
  selectProductState,
  (state: ProductsState) => state.products
);

export const selectLoading = createSelector(
  selectProductState,
  (state: ProductsState) => state.loading
);

export const selectLoaded = createSelector(
  selectProductState,
  (state: ProductsState) => state.loaded
);

export const selectError = createSelector(
  selectProductState,
  (state: ProductsState) => state.error
);

export const selectProductsOfHangar = createSelector(
  selectProductState,
  (state: ProductsState) => state.productsOfHangar
);

export const selectPricesOfProduct = createSelector(
  selectProductState,
  (state: ProductsState) => state.prices
);

export const selectIsProduct = createSelector(
  selectProductState,
  (state: ProductsState) => state.isProduct
);

export const selectProductsToShop = createSelector(
  selectProductState,
  (state: ProductsState) => state.products.filter(prod => prod.price > 0 && prod.hangars.length > 0)
);

export const selectProductById = createSelector(
  selectProductList,
  fromRouter.selectRouterState,
  (products: ProductModel[], route): ProductModel => products.find( prod => prod.id === parseInt(route.state.params.id, 10))
);

export const selectProductsUnlinkOfHangar = createSelector(
  selectProductList,
  fromRouter.selectRouterState,
  (products: ProductModel[], route): ProductModel[] => products.filter( (product) => {
    return !product.hangars.includes(parseInt(route.state.params.id, 10));
  })
);

export const selectProductsLike = createSelector(
  selectProductList,
  fromRouter.selectRouterState,
  (products: ProductModel[], route): ProductModel[] => products.filter(product => product.name.includes(route.state.params.name))
);