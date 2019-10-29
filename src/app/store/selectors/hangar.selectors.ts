import { State } from './../state/index';
import { HangarsState } from './../state/hangars.state';
import { createSelector } from '@ngrx/store';

export const selectHangarState = (state: State) => state.hangar;

export const selectHangarList = createSelector(
  selectHangarState,
  (state: HangarsState) => state.hangars
);

export const selectLoading = createSelector(
  selectHangarState,
  (state: HangarsState) => state.loading
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



