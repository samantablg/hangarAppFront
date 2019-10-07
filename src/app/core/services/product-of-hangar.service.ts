import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductOfHangarModel } from '../models/product-hangar.interface';
import { ProductOfHangarExtendedModel } from '../models/product-hangar-extended.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductOfHangarService {

  private urlApi = 'http://localhost:8888/api/';

  constructor(private http: HttpClient) { }

  public loadRelationships(id: number): Observable<ProductOfHangarModel[]> {
    return this.http
               .get<ProductOfHangarModel[]>(`${ this.urlApi }products/hangar/${ id }`);
  }

  public loadRelationshipsExtended(id: number): Observable<ProductOfHangarExtendedModel[]> {
    return this.http
               .get<ProductOfHangarExtendedModel[]>(`${ this.urlApi }link/productsOfHangar/${ id }`);
  }

  public updateAmountOfRelationShip(productOfHangar: ProductOfHangarModel) {
    return this.http
                .put(`${ this.urlApi }productOfHangar/update`, productOfHangar);
  }

  public unlinkProductOfHangar( productOfHangar: ProductOfHangarModel): Observable<ProductOfHangarModel> {
    return this.http
                .put<ProductOfHangarModel>(`${ this.urlApi }productOfHangar/delete`, productOfHangar);
  }

  public postProductToHangar( productOfHangar: ProductOfHangarModel) {
    return this.http
                .post(`${ this.urlApi }productOfHangar`, productOfHangar);
  }

  public isProductLinkToHangar(id: number) {
    return this.http
                .get<boolean>(`${ this.urlApi }productOfHangar/product/${ id }`);
  }

  public isHangarNotEmpty(id: number) {
    return this.http.get<boolean>(`${ this.urlApi }productOfHangar/hangar/${ id }`);
  }


}
