import { ProductExtendedModel } from './../models/product-extended.interface';
import { BasicHangarModel } from 'src/app/core/models/basic-hangar.interface';
import { HangarService } from 'src/app/core/services/hangar.service';
import { ProductModel } from './../models/product.interface';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductOfHangarModel } from '../models/product-hangar.interface';
import { ProductWithNameOfHangarModel } from '../models/product-hangar-extended.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private urlApi = 'http://localhost:8888/api/';
  products: ProductModel[] = [];

  constructor( private http: HttpClient ) { }

  httpOptions = {
    headers: new HttpHeaders( { 'Content-Type': 'application/json' })
  };

  public loadProducts(): Observable<ProductModel[]> {
    return this.http
                .get<ProductModel[]>(`${ this.urlApi }products`);
  }

  public loadProductsExtended(): Observable<ProductExtendedModel[]> {
    return this.http
                .get<ProductExtendedModel[]>(`${ this.urlApi }productsExtended`);
  }

  public loadProductsPage(page: number, items: number ): Observable<ProductModel[]> {
    return this.http
                .get<ProductModel[]>(`${ this.urlApi }products/${ page }/${ items }`);
  }

  public getProduct(id: number): ProductModel {
    return this.products[id];
  }
  public getProductById(id: number): Observable<ProductModel> {
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

  public loadRelationships(id: number): Observable<ProductOfHangarModel[]> {
    return this.http
               .get<ProductOfHangarModel[]>(`${ this.urlApi }products/hangar/${ id }`);
  }

  public loadRelationshipsWithNameOfProduct(id: number): Observable<ProductWithNameOfHangarModel[]> {
    return this.http
               .get<ProductWithNameOfHangarModel[]>(`${ this.urlApi }link/productsOfHangar/${ id }`);
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

  public findProductsByName(name: string): Observable<ProductModel[]> {
    return this.http
                .get<ProductModel[]>(`${ this.urlApi }search/product?p_name=${ name }`);
  }

  public productExistByName(name: string) {
    return this.http
                .get<boolean>(`${ this.urlApi }product/exist/${ name }`);
  }

  public deleteProduct(id: number) {
    return this.http
                .put(`${ this.urlApi }product/${ id }`, '');
  }

  public deleteProductIfIsNotLink(id: number) {
    return this.http
                .get<boolean>(`${ this.urlApi }productOfHangar/link/${ id }`);
  }

  public loadProductsNotAssociateToHangarById(idHangar: number): Observable<ProductModel[]> {
    return this.http
                .get<ProductModel[]>(`${ this.urlApi }products/unlink/${ idHangar }`);
  }

}
