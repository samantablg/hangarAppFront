import { createSelector } from '@ngrx/store';
import { AuthState } from './../state/auth.state';
import { State } from './../state/index';

export const selectAuthState = (state: State) => state.auth;

export const selectIsRegister = createSelector(
  selectAuthState,
  (state: AuthState) => state.isRegister
);

export const selectUsername = createSelector(
  selectAuthState,
  (state: AuthState) => state.user.username
);

export const selectIsAuthenticated = createSelector(
  selectAuthState,
  (state: AuthState) => state.isAuthenticated
);
