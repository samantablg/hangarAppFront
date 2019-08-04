import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PriceModel } from '../models/price.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PriceService {

  private urlApi = 'http://localhost:8888/api/price/';
  prices: PriceModel[] = [];

  constructor( private http: HttpClient) { }

  httpOptions = {
    headers: new  HttpHeaders( { 'Content-Type': 'application/json' })
  };

  public postPrice(price: number, id: number) {
    return this.http
                .post<PriceModel>(`${ this.urlApi }product/${id}`, price).subscribe( data => {
                  console.log(data);
                });
  }

  public loadPrices(id: number): Observable<PriceModel[]> {
    return this.http
                .get<PriceModel[]>(`${ this.urlApi }product/${ id }`);
  }

  public getHistoricOfProduct(id: number): PriceModel[] {
    this.loadPrices(id);
    return this.prices;
  }

}
