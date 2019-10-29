import { ProfileState } from './../state/profile.state';
import { createSelector } from '@ngrx/store';
import { State } from './../state/index';

export const selectProfileState = (state: State) => state.profile;

export const selectProfile = createSelector(
  selectProfileState,
  (state: ProfileState) => state.profile
);

export const selectName = createSelector(
  selectProfileState,
  (state: ProfileState) => state.profile.name
);

export const selectSurname = createSelector(
  selectProfileState,
  (state: ProfileState) => state.profile.surname
);

export const SelectFullName = createSelector(
  selectName,
  selectSurname,
  (name: string, surname: string): string => name + ' ' + surname
);

/* export const selectProductById = createSelector(
  selectProductList,
  fromRouter.selectRouterState,
  (products: ProductModel[], route): ProductModel => products.find( prod => prod.id === parseInt(route.state.params.id, 10))
); */


