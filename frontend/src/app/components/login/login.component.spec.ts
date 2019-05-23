import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { Router } from '@angular/router';

import {
  MatCardModule, MatInputModule, MatButtonModule, MatDividerModule, MatToolbarModule,
  MatSidenavModule, MatMenuModule, MatIconModule, MatListModule, MatExpansionModule,
  MatDatepickerModule, MatNativeDateModule, MatSelectModule,
} from '@angular/material';

import { of, throwError } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  const routerMock = {navigate: jasmine.createSpy('navigate')};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [MatCardModule, MatInputModule, MatButtonModule, MatDividerModule, MatToolbarModule,
        MatSidenavModule, MatMenuModule, MatIconModule, MatListModule, MatExpansionModule,
        MatDatepickerModule, MatNativeDateModule, MatSelectModule, ReactiveFormsModule, HttpClientModule,
        BrowserAnimationsModule ],
      providers: [ { provide: Router, useValue: routerMock }, ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.loginForm.setValue({email: 'felipe@gmail.com', password: '123'});
    localStorage.removeItem('currentUser');
  });

  it('should return null', () => {
    component.loginForm.reset();
    component.logIn();
  });

  it('should login', () => {
    spyOn(component.authService, 'SignUp').and.returnValue(of({message: 'login'}));
    component.logIn();
  });

  it('should show credentiasl incorrects', () => {
    spyOn(component.authService, 'SignUp').and.returnValue(throwError('error'));
    component.logIn();
  });

});
