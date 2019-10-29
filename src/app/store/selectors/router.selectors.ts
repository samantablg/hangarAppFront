import { State } from 'src/app/store/state';
import { createSelector } from '@ngrx/store';
import { RouterStateUrl } from '../state/router.state';
import { RouterReducerState } from '@ngrx/router-store';

export const getRouterState = (state: State) => state.route;

export const selectRouterState = createSelector(
  getRouterState,
  (routerState: RouterReducerState<RouterStateUrl>) => routerState
);

export const selectId = createSelector(
  getRouterState,
  (state: RouterReducerState<RouterStateUrl>) => state.state.params.id
);

export const selectUrl = createSelector(
  getRouterState,
  (state: RouterReducerState<RouterStateUrl>) => state.state.url
);
