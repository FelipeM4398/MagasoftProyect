import { TestBed, getTestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

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

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });

  it ('should return an Observable<User>', () => {
    const service: UserService = TestBed.get(UserService);
    const password = '1111'
    const dummyUser = { id: 1,
                        name: 'Felipe',
                        lastName: 'Muñoz',
                        birthDate: new Date(),
                        identification: '1144205319',
                        email: 'luisf4398@hotmail.com',
                        password,
                        type: 'lector'
                        };
    const identification = '1144205319';

    service.getUserByIdentification(identification).subscribe(
      data => {
        expect(data).toEqual(dummyUser);
      }
    );

    const req = httpMock.expectOne('http://localhost:3000/adminstrator/1144205319');
    expect(req.request.method).toBe('GET');
    req.flush(dummyUser);
  });

});
