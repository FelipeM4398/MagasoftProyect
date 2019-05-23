import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroEvaluadorComponent } from './registro-evaluador.component';

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatCardModule, MatInputModule, MatButtonModule, MatDividerModule, MatToolbarModule,
  MatSidenavModule, MatMenuModule, MatIconModule, MatListModule, MatExpansionModule,
  MatDatepickerModule, MatNativeDateModule, MatSelectModule,
} from '@angular/material';

import { of, throwError } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

describe('RegistroEvaluadorComponent', () => {
  let component: RegistroEvaluadorComponent;
  let fixture: ComponentFixture<RegistroEvaluadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroEvaluadorComponent ],
      imports: [ ReactiveFormsModule, MatCardModule, MatInputModule, MatButtonModule, MatDividerModule,
        MatToolbarModule, MatSidenavModule, MatMenuModule, MatIconModule, MatListModule, MatExpansionModule,
        MatDatepickerModule, MatNativeDateModule, MatSelectModule, ReactiveFormsModule, HttpClientModule, BrowserAnimationsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroEvaluadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    localStorage.setItem('currentUser', JSON.stringify({token: 'token'}));
    component.evaluadorForm.setValue(
      {
        nameUser: 'name',
        lastNameUser: 'last',
        birthDateUser: new Date(),
        identificationUser: '1111',
        emailUser: 'luis@gmail.com',
        passwordUser: '123',
        linkCvlackEvaluator: 'link',
        levelEducationEvaluator: 'level'
      }
    );
  });

  it('should method return null', () => {
    component.evaluadorForm.reset();
    component.registerEvaluador();
  });

  it('should show invalid token message', () => {
    spyOn(component.userService, 'createUser').and.returnValue(of({message: 'Invalid Token'}));
    component.registerEvaluador();
  });

  it('should show created autor', () => {
    spyOn(component.userService, 'createUser').and.returnValue(of({message: 'Created user'}));
    component.registerEvaluador();
  });

  it('should show error message', () => {
    spyOn(component.userService, 'createUser').and.returnValue(throwError('error mesage'));
    component.registerEvaluador();
  });

  it('should show info message', () => {
    spyOn(component.userService, 'createUser').and.returnValue(of({message: 'Info mensaje'}));
    component.registerEvaluador();
  });
});
