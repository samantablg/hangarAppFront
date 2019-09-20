import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommerceService {

  private urlApi = 'http://localhost:8888/api/';

  constructor(private http: HttpClient) { }
}
