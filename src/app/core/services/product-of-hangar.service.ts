import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductOfHangarModel } from '../models/product-hangar.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductOfHangarService {

  private urlApi = 'http://localhost:8888/api/';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };


  public loadRelationships(idHangar: number): Observable<ProductOfHangarModel[]> {
    return this.http.get<ProductOfHangarModel[]>(`${ this.urlApi }products/hangar/${ idHangar }`);
  }

  public loadRelationshipsExtended(idHangar: number): Observable<ProductOfHangarModel[]> {
    return this.http.get<ProductOfHangarModel[]>(`${ this.urlApi }link/productsOfHangar/${ idHangar }`);
  }

  public updateAmountOfRelationShip(productOfHangar: ProductOfHangarModel) {
    return this.http.put(`${ this.urlApi }productOfHangar/update`, productOfHangar);
  }

  public unlinkProductOfHangar( productOfHangar: ProductOfHangarModel) {
    return this.http
    .delete<ProductOfHangarModel>
    (`${ this.urlApi }productOfHangar/delete/${ productOfHangar.hangar}/${ productOfHangar.product}`);
  }

  public postProductToHangar( productOfHangar: ProductOfHangarModel) {
    return this.http.post(`${ this.urlApi }productOfHangar`, productOfHangar);
  }

  public isProductLinkToHangar(id: number) {
    return this.http.get<boolean>(`${ this.urlApi }productOfHangar/product/${ id }`);
  }

  public isHangarNotEmpty(id: number) {
    return this.http.get<boolean>(`${ this.urlApi }productOfHangar/hangar/${ id }`);
  }


}
