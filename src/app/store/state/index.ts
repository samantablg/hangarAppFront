import { AuthState } from './auth.state';
import { CommerceState } from './commerce.state';
import { ProductsState } from './products.state';
import { HangarsState } from './hangars.state';
import { RouterReducerState, RouterStateSerializer } from '@ngrx/router-store';
import { RouterStateUrl } from './router.state';
import { RouterStateSnapshot } from '@angular/router';

export interface State {
  hangar: HangarsState;
  product: ProductsState;
  commerce: CommerceState;
  route: RouterReducerState<RouterStateUrl>;
  auth: AuthState;
}

export class CustomRouterStateSerializer implements RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
      let route = routerState.root;
      while (route.firstChild) {
          route = route.firstChild;
      }

      const { url } = routerState;
      const queryParams = routerState.root.queryParams;
      const params = route.params;

      // Only return an object including the URL, params and query params
      // instead of the entire snapshot
      return { url, params, queryParams };
  }
}
