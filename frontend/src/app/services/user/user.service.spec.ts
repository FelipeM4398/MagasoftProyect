import { TestBed, getTestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { User } from 'src/app/_interfaces/user';

describe('UserService', () => {

  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
  });

  it('should create user', () => {
    const service: UserService = TestBed.get(UserService);
    const user: User = null;
    service.createUser(user, 'token').subscribe( data => {
      expect(data).toEqual({message: 'Created user'});
    });

    const requ = httpMock.expectOne('http://localhost:3000/adminstrator/createUser');
    expect(requ.request.method).toBe('POST');
    requ.flush({message: 'Created user'});
  });

});
