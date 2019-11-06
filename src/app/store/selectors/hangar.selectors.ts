import { HangarModel } from 'src/app/core/models/hangar.interface';
import { State } from './../state/index';
import { HangarsState } from './../state/hangars.state';
import { createSelector } from '@ngrx/store';
import * as fromRouter from './router.selectors';

export const selectHangarState = (state: State) => state.hangar;

export const selectHangarList = createSelector(
  selectHangarState,
  (state: HangarsState) => state.hangars
);

export const selectLoading = createSelector(
  selectHangarState,
  (state: HangarsState) => state.loading
);

export const selectLoaded = createSelector(
  selectHangarState,
  (state: HangarsState) => state.loaded
);

export const selectError = createSelector(
  selectHangarState,
  (state: HangarsState) => state.error
);

export const selectHangarSelected = createSelector(
  selectHangarState,
  (state: HangarsState) => state.hangarSelected
);

export const selectIsHangar = createSelector(
  selectHangarState,
  (state: HangarsState) => state.isHangar
);

export const selectHangarsLike = createSelector(
  selectHangarList,
  fromRouter.selectRouterState,
  (hangars: HangarModel[], route): HangarModel[] => hangars.filter(hangar => hangar.name.includes(route.state.params.name))
);



