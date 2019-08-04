import { ProductModel } from './product.interface';
export interface PriceModel {
  date: Date;
  price: number;
  product: ProductModel;
}
