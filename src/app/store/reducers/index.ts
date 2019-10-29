import { State } from '../state/index';
import { ActionReducerMap, MetaReducer, createSelector, createFeatureSelector } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { hangarReducer } from './hangar.reducers';
import { productReducer } from './product.reducers';
import { commerceReducer } from './commerce.reducers';
import { routerReducer } from '@ngrx/router-store';
import { RouterStateUrl } from '../state/router.state';
import { authReducer } from './auth.reducers';
import { profileReducer } from './profile.reducers';

// tslint:disable-next-line: one-variable-per-declaration
export const rootReducers: ActionReducerMap<State> = {
  hangar: hangarReducer,
  product: productReducer,
  commerce: commerceReducer,
  route: routerReducer,
  auth: authReducer,
  profile: profileReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
