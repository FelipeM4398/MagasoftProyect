import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../_interfaces/user';

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

  getUserByIdentification(identification: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}adminstrator/${identification}`, httpOptions);
  }
}
