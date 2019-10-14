import { State } from '../state/index';
import { ActionReducerMap, MetaReducer, createSelector, createFeatureSelector } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { hangarsReducer } from './hangars.reducers';
import { productsReducer } from './products.reducer';
import { commerceReducer } from './commerce.reducer';
import { routerReducer } from '@ngrx/router-store';
import { RouterStateUrl } from '../state/router.state';

// tslint:disable-next-line: one-variable-per-declaration
export const rootReducers: ActionReducerMap<State> = {
  hangars: hangarsReducer,
  products: productsReducer,
  commerce: commerceReducer,
  route: routerReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const getRouter = createFeatureSelector<RouterStateUrl>(
  'routerReducer'
);

// Selectores
export const getHangars = (state: State) => state.hangars;

export const getProducts = (state: State) => state.products;

export const getRouterState = createSelector( getRouter, (routerState: RouterStateUrl) => routerState );

