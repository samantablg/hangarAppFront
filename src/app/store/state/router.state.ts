import { Params } from '@angular/router';
import { RouterReducerState } from '@ngrx/router-store';

export interface RouterStateUrl {
  url: string;
  params: Params;
  queryParams: Params;
}

export const initialRouterState: RouterStateUrl = {
  url: '/',
  params: {},
  queryParams: {}
};

