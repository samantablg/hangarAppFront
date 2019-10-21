import { MinifiedModel } from './minified.interface';
export interface ProductModel {
  id: number;
  name: string;
  description: string;
  state?: boolean;
  price?: number;
  hangars?: Array<number>;
}
