import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { User } from 'src/app/_interfaces/user';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = 'http://localhost:3000/auth/';
  public currentUser: Observable<any>;
  private currentUserSubject: BehaviorSubject<any>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  SignUp(email: string, password: string) {
    return this.http.post(`${this.apiUrl}signUp`, {email, password}, httpOptions)
    .pipe(
      map( (user: any) => {
        localStorage.setItem('currentUser', JSON.stringify(user.message));
        this.currentUserSubject.next(user.message);
        return user.message;
      }),
      catchError(this.handleError)
    );
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  returnUrl(rol: string): string {
    if (rol === 'ADMINISTRATOR') {
      return 'administrator/home';
    } else if ( rol === 'AUTHOR' ) {
      return 'author/home';
    } else if ( rol === 'COMMITTEE' ) {
      return 'committee/home';
    } else {
      return null;
    }
  }

  public handleError(error: HttpErrorResponse) {
    return throwError(error.error.message);
  }
}
