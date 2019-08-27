import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../../core/models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private url = 'http://localhost:8888/register';
  constructor(private http: HttpClient) { }

  // httpOptions = {
  //   headers: new HttpHeaders( { 'Content-Type': 'application/json' })
  // };

  headers = new HttpHeaders({'Access-Control-Allow-Origin' : '*'});

  public postUser(user: UserModel) {
    return this.http
                .post<UserModel>(`${ this.url }`, user)
                .subscribe( data => {
                  console.log(data);
                });
  }

  public userExistsByUsername(username: string) {
    return this.http
                .get<boolean>(`${ this.url }/${ username }`);
  }
}
