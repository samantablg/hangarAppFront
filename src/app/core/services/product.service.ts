import { ProductModel } from './../models/product.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PriceModel } from '../models/price.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private urlApi = 'http://localhost:8888/api/';

  constructor( private http: HttpClient ) { }

  public loadProducts(): Observable<ProductModel[]> {
    return this.http
      .get<ProductModel[]>(`${ this.urlApi }productsExtended`)
      .pipe(
        map( result => result )
      );
  }

  public loadProductsPage(page: number, items: number ): Observable<ProductModel[]> {
    return this.http
                .get<ProductModel[]>(`${ this.urlApi }products/${ page }/${ items }`);
  }

  public loadProductById(id: number): Observable<ProductModel> {
    return this.http
                .get<ProductModel>(`${ this.urlApi }product/${ id }`);
  }

  public postProduct(product: ProductModel) {
    return this.http
                .post<ProductModel>(`${ this.urlApi }product`, product);
  }

  public updateProduct(product: ProductModel) {
    return this.http.put(`${ this.urlApi }product`, product);
  }

  public findProductsByName(name: string): Observable<ProductModel[]> {
    return this.http
                .get<ProductModel[]>(`${ this.urlApi }search/product?name=${ name }`);
  }

  public productExistByName(name: string) {
    return this.http
                .get<boolean>(`${ this.urlApi }product/exist/${ name }`);
  }

  public deleteProduct(id: number) {
    return this.http
                .put(`${ this.urlApi }product/${ id }`, id);
  }

  public loadProductsNotAssociateToHangarById(idHangar: number): Observable<ProductModel[]> {
    return this.http
                .get<ProductModel[]>(`${ this.urlApi }products/unlink/${ idHangar }`);
  }

  public postPrice(price: number, id: number) {
    return this.http
                .post<PriceModel>(`${ this.urlApi }price/product/${ id }`, price);
  }

  public loadPricesOfProduct(id: number): Observable<PriceModel[]> {
    return this.http
                .get<PriceModel[]>(`${ this.urlApi }price/product/${ id }`);
  }

}
