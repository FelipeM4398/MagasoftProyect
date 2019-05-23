import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroAutorComponent } from './registro-autor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatCardModule, MatInputModule, MatButtonModule, MatDividerModule, MatToolbarModule,
  MatSidenavModule, MatMenuModule, MatIconModule, MatListModule, MatExpansionModule,
  MatDatepickerModule, MatNativeDateModule, MatSelectModule,
} from '@angular/material';

import { of, throwError } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

describe('RegistroAutorComponent', () => {
  let component: RegistroAutorComponent;
  let fixture: ComponentFixture<RegistroAutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroAutorComponent ],
      imports: [ ReactiveFormsModule, MatCardModule, MatInputModule, MatButtonModule, MatDividerModule,
        MatToolbarModule, MatSidenavModule, MatMenuModule, MatIconModule, MatListModule, MatExpansionModule,
        MatDatepickerModule, MatNativeDateModule, MatSelectModule, ReactiveFormsModule, HttpClientModule, BrowserAnimationsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    localStorage.setItem('currentUser', JSON.stringify({token: 'token'}));
    component.autorForm.setValue(
      {
        nameUser: 'name',
        lastNameUser: 'last',
        birthDateUser: new Date(),
        identificationUser: '1111',
        emailUser: 'luis@gmail.com',
        passwordUser: '123',
        hodbed: 'ITMEDIA'
      }
    );
  });

  it('should method return null', () => {
    component.autorForm.reset();
    component.registerAutor();
  });

  it('should show invalid token message', () => {
    spyOn(component.userService, 'createUser').and.returnValue(of({message: 'Invalid Token'}));
    component.registerAutor();
  });

  it('should show created autor', () => {
    spyOn(component.userService, 'createUser').and.returnValue(of({message: 'Created user'}));
    component.registerAutor();
  });

  it('should show error message', () => {
    spyOn(component.userService, 'createUser').and.returnValue(throwError('error message'));
    component.registerAutor();
  });

  it('should show info message', () => {
    spyOn(component.userService, 'createUser').and.returnValue(of({message: 'Info'}));
    component.registerAutor();
  });

});
