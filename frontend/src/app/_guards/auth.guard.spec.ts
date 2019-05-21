import { TestBed, async, inject, getTestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AuthorGuard', () => {

  let injector: TestBed;
  let authService: AuthService;
  let guard: AuthGuard;
  const routeMock: any = { snapshot: {}, routeConfig: {path: 'author'}};
  const routeStateMock: any = { snapshot: {}, url: '/author/home', routeConfig: {path: 'author'}};
  const routerMock = {navigate: jasmine.createSpy('navigate')};

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuard, { provide: Router, useValue: routerMock }, ],
      imports: [HttpClientTestingModule]
    });

    injector = getTestBed();
    authService = injector.get(AuthService);
    guard = injector.get(AuthGuard);

  });

  it('should redirect an user to the login route', () => {
    expect(guard.canActivate(routeMock, routeStateMock)).toEqual(false);
    expect(routerMock.navigate).toHaveBeenCalledWith(['/login']);
  });

  it('should allow the user to access app', () => {
    spyOnProperty(authService, 'currentUserValue', 'get').and.returnValues({privilegesTypeUser: 'AUTHOR'});
    spyOn(guard, 'checkPermisions').and.returnValues(true);
    expect(guard.canActivate(routeMock, routeStateMock)).toEqual(true);
  });

  describe('checkPermisions', () => {

    it('should return true', () => {
      expect(guard.checkPermisions('AUTHOR', 'author')).toEqual(true);
    });

    it('should return false', () => {
      expect(guard.checkPermisions('ADMINISTRATOR', 'author')).toEqual(false);
    });
  });

});
