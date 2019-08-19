import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.interface';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export class JwtResponse {
  constructor(
    public jwttoken: string,
     ) {}
}
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) { }

  aunthenticate(username: string, password: string): Observable<any> {
    return this.httpClient.post<any>('http://localhost:8888/authenticate', {username, password});
  }

  isUserLoggedIn(): boolean {
    const user = sessionStorage.getItem('username');
    if (user === null) {
      return false;
    }
    return true;
  }

  logOut() {
    sessionStorage.removeItem('username');
  }
}
