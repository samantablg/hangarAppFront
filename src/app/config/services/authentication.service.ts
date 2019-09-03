import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private urlApi = 'http://localhost:8888/';
  constructor(private http: HttpClient) { }

  aunthenticate(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${ this.urlApi }authenticate`, {username, password});
  }

  isUserLoggedIn(): boolean {
    const user = sessionStorage.getItem('username');
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem('username');
  }

  getName(): string {
    return sessionStorage.getItem('username');
  }
}
