import { BasicHangarModel } from 'src/app/core/models/basic-hangar.interface';
import { ProductModel } from './../models/product.interface';
import { HangarModel } from 'src/app/core/models/hangar.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  hangar: any;
  product: any;
  data: any;
  constructor() { }

  setDataRelativeToHangar(hangar: HangarModel | HangarModel[] | BasicHangarModel) {
    this.hangar = hangar;
  }

  getDataRelativeToHangar() {
    return this.hangar;
  }

  setData(data: any) {
    this.data = data;
  }

  getData() {
    return this.data;
  }

  setDataRelativeToProduct(product: ProductModel | ProductModel[]) {
    this.product = product;
  }

  getDataRelativeToProduct() {
    return this.product;
  }

}
