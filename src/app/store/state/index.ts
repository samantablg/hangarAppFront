import { CommerceState } from './commerce.state';
import { ProductsState } from './products.state';
import { HangarsState } from './hangars.state';

export interface State {
  hangars: HangarsState;
  products: ProductsState;
  commerce: CommerceState;
}
