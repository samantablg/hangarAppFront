import { HangarModel } from './../models/hangar.interface';
import { BasicHangarModel } from './../models/basic-hangar.interface';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HangarService {

  private urlApi = 'http://localhost:8888/api/';
  hangars: HangarModel[] = [];
  basicHangars: BasicHangarModel[] = [];
  data: any;

  constructor( private http: HttpClient ) {}
  httpOptions = {
    headers: new  HttpHeaders( { 'Content-Type': 'application/json' })
  };

  public loadHangars(): Observable<HangarModel[]> {
    return this.http
                .get<HangarModel[]>(`${ this.urlApi }hangars`);
  }

  public loadHangarsPage(page: number, items: number ): Observable<HangarModel[]> {
    return this.http
                .get<HangarModel[]>(`${ this.urlApi }hangars/${ page }/${ items }`);
  }

  public loadBasicInfoHangars(): Observable<any> {
    return this.http
                .get<any>(`${ this.urlApi }basicDataHangars`);
  }

  public findHangarsByName(name: string): Observable<HangarModel[]> {
    return this.http
                .get<HangarModel[]>(`${ this.urlApi }search?name=${ name }`);
  }

  public getHangars(): HangarModel[] {
    this.loadHangars();
    return this.hangars;
  }

  public getHangar(id: number): HangarModel {
    return this.hangars[id];
  }

  public hangarSelect(data: any): any {
    this.data = data;
  }

  public useHangarData(): any {
    return this.data;
  }

  public postHangar(hangar: any) {
    return this.http
                .post<HangarModel>(`${ this.urlApi }hangar`, hangar).subscribe( data => {
                  console.log(data);
                });
  }

  public updateHangar(hangar: HangarModel) {
    return this.http.put(`${ this.urlApi }hangar`, hangar).subscribe( data => {
                  console.log(data);
                });
  }

}
