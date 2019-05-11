import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  getAdminUsers(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}adminstrator/getUsers`, httpOptions);
  }
}
