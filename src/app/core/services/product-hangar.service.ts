import { ProductOfHangarModel } from 'src/app/core/models/product-hangar.interface';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductToHangarService {

  private urlApi = 'http://localhost:8888/api/';

  constructor( private http: HttpClient ) {}

  httpOptions = {
    headers: new  HttpHeaders( { 'Content-Type': 'application/json' })
  };

  /*public loadRelationships(id: number): Observable<ProductOfHangarModel[]> {
    return this.http
               .get<ProductOfHangarModel[]>(`${ this.urlApi }products/hangar/${ id }`);
  }*/

  /*public postProductToHangar( productOfHangar: ProductOfHangarModel) {
    return this.http
                .post(`${ this.urlApi }productOfHangar`, productOfHangar).subscribe( data => {
                  console.log(data);
                });
  }*/

}
