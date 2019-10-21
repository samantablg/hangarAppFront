import { State } from '../state/index';
import { ActionReducerMap, MetaReducer, createSelector, createFeatureSelector } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { hangarReducer } from './hangar.reducers';
import { productReducer } from './product.reducer';
import { commerceReducer } from './commerce.reducer';
import { routerReducer } from '@ngrx/router-store';
import { RouterStateUrl } from '../state/router.state';
import { authReducer } from './auth.reducer';

// tslint:disable-next-line: one-variable-per-declaration
export const rootReducers: ActionReducerMap<State> = {
  hangar: hangarReducer,
  product: productReducer,
  commerce: commerceReducer,
  route: routerReducer,
  auth: authReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const getRouter = createFeatureSelector<RouterStateUrl>(
  'routerReducer'
);

// TODO: crear una carpeta selector

export const getHangars = (state: State) => state.hangar;

export const getProducts = (state: State) => state.product;

export const getProductById = (state: State, id: number) => state.product.products.filter(prod => prod.id === id);

export const getRouterState = createSelector( getRouter, (routerState: RouterStateUrl) => routerState );

