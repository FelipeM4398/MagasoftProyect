import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../_interfaces/user';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getUsers(token: string) {
    httpOptions.headers = new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: token,
    });
    return this.http.get<any>(`${this.apiUrl}adminstrator/getUsers`, httpOptions);
  }

  createUser(user: User, token: string): Observable<any> {
    httpOptions.headers = new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: token,
    });
    return this.http.post<any>(`${this.apiUrl}adminstrator/createUser`, user, httpOptions);
  }

  updateData(user: User, token: string) {
    httpOptions.headers = new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: token,
    });
    return this.http.patch<any>(`${this.apiUrl}author/updateInfo`, user, httpOptions);
  }
}
