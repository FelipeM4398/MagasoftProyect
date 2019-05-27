import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { Article } from 'src/app/_interfaces/article';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  apiUrl = 'http://localhost:3000/author/';

  constructor(private http: HttpClient) { }

  createArticle(article: Article, token: string): Observable<any> {
    httpOptions.headers = new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: token,
    });
    return this.http.post<any>(`${this.apiUrl}createArticle`, article, httpOptions);
  }

  getMyArticles(email: string, token: string): Observable<any> {
    httpOptions.headers = new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: token,
    });
    return this.http.post<any>(`${this.apiUrl}ViewArticle`, {email}, httpOptions);
  }

  uploadArchive(file) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', file.name);
    httpOptions.headers = new HttpHeaders({
      'Content-Type':  'multipart/form-data',
    });
    return this.http.post<any>('', formData, httpOptions);
  }
}
