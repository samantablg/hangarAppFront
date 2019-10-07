import { State } from '../state/index';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { hangarReducer } from './hangar.reducers';
import { productReducer } from './product.reducer';

// tslint:disable-next-line: one-variable-per-declaration
export const rootReducers: ActionReducerMap<State> = {
  hangar: hangarReducer,
  product: productReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];


// Selectores
export const getHangars = (state: State) => state.hangar;

