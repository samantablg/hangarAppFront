import { ProductState } from './product.state';
import { HangarState } from './hangar.state';

export interface State {
  hangar: HangarState;
  product: ProductState;
}
