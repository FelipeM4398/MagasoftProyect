import { TestBed, getTestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { first, map } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

describe('AuthService', () => {

  let injectorr: TestBed;
  let httpMockk: HttpTestingController;
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    injectorr = getTestBed();
    httpMockk = injectorr.get(HttpTestingController);
    service = TestBed.get(AuthService);
  });

  it('should return an observable', () => {

    service.SignUp('email', 'password')
    .pipe(first())
    .subscribe(
      (data: any) => {
        expect(data).toBeDefined();
      },
    );

    const requ = httpMockk.expectOne('http://localhost:3000/auth/signUp');
    expect(requ.request.method).toBe('POST');
    requ.flush({message: {message : { token: 'token'}}});
  });

  it('should return to the correct page', () => {
    expect(service.returnUrl('ADMINISTRATOR')).toEqual('administrator/home');
    expect(service.returnUrl('AUTHOR')).toEqual('author/home');
    expect(service.returnUrl('')).toBe(null);
  });

  it('should logout', () => {
    service.logout();
  });

  it('should error', () => {
    service.SignUp('email', 'password')
    .pipe(first())
    .subscribe(
      data => { },
      error => expect(error).toBeDefined(),
    );

    const requ = httpMockk.expectOne('http://localhost:3000/auth/signUp');
    expect(requ.request.method).toBe('POST');
    requ.error(new ErrorEvent(''));
  });


});
