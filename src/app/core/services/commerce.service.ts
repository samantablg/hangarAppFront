import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderModel } from '../models/order.interface';
import { ProfileModel } from '../models/profile.interface';

@Injectable({
  providedIn: 'root'
})
export class CommerceService {

  private urlApi = 'http://localhost:8888/api/';

  constructor(private http: HttpClient) { }

  public saveOrder(order: OrderModel): Observable<OrderModel> {
    return this.http.post<OrderModel>(`${ this.urlApi }order`, order);
  }

  public getProfile(): Observable<ProfileModel> {
    return this.http.get<ProfileModel>(`${ this.urlApi }profileClient`);
  }
}
