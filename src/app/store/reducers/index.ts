import { State } from '../state/index';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { hangarsReducer } from './hangars.reducers';
import { productsReducer } from './products.reducer';
import { commerceReducer } from './commerce.reducer';

// tslint:disable-next-line: one-variable-per-declaration
export const rootReducers: ActionReducerMap<State> = {
  hangars: hangarsReducer,
  products: productsReducer,
  commerce: commerceReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];


// Selectores
export const getHangars = (state: State) => state.hangars;

export const getProducts = (state: State) => state.products;

