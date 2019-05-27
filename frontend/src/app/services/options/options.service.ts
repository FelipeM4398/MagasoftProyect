import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Category } from 'src/app/_interfaces/category';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class OptionsService {

  apiUrl = 'http://localhost:3000/adminstrator/';

  constructor(private http: HttpClient) { }

  getCategories(token: string) {
    httpOptions.headers = new HttpHeaders({
      'Content-Type':  'application/json',
    Authorization: token,
    });
    return this.http.get(`${this.apiUrl}getCategories`, httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }

  createCategory(nameCategory: Text, token: string) {
    return this.http.post(`${this.apiUrl}createCategory`, {nameCategory}, httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }

  public handleError(error: HttpErrorResponse) {
    return throwError(error.error.message);
  }
}
