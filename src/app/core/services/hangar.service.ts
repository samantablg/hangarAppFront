import { HangarModel } from './../models/hangar.interface';
import { BasicHangarModel } from './../models/basic-hangar.interface';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HangarService {

  private urlApi = 'http://localhost:8888/api/';

  constructor( private http: HttpClient ) {}
  // TODO: Cambiar la forma de recibir la informacón del back

  public loadHangars(): Observable<HangarModel[]> {
    return this.http
      .get<HangarModel[]>(`${ this.urlApi }hangars`)
      .pipe(
        map(result => result )
      );
  }

  public loadHangarById(id: number): Observable<HangarModel> {
    return this.http
      .get<HangarModel>(`${ this.urlApi }hangar/${ id }`)
      .pipe(
        map(result => result )
      );
  }

  public loadHangarsPage(page: number, items: number ): Observable<HangarModel[]> {
    return this.http
      .get<HangarModel[]>(`${ this.urlApi }hangars/${ page }/${ items }`)
      .pipe(
        map(result => result )
      );
  }

  public loadBasicInfoHangars(): Observable<BasicHangarModel[]> {
    return this.http
                .get<BasicHangarModel[]>(`${ this.urlApi }basicDataHangars`);
  }

  public findHangarsByName(name: string): Observable<HangarModel[]> {
    return this.http
                .get<HangarModel[]>(`${ this.urlApi }search?name=${ name }`);
  }

  public postHangar(hangar: BasicHangarModel) {
    return this.http
                .post<HangarModel>(`${ this.urlApi }hangar`, hangar);
  }

  public updateHangar(hangar: HangarModel) {
    return this.http
                .put(`${ this.urlApi }hangar`, hangar);
  }

  public hangarExistByName(name: string) {
    return this.http
                .get<boolean>(`${ this.urlApi }hangar/exist/${ name }`);
  }

  public deleteHangar(id: number) {
    return this.http.put(`${ this.urlApi }hangar/${ id }`, '');
  }

}
