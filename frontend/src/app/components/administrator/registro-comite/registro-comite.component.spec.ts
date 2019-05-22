import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroComiteComponent } from './registro-comite.component';

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatCardModule, MatInputModule, MatButtonModule, MatDividerModule, MatToolbarModule,
  MatSidenavModule, MatMenuModule, MatIconModule, MatListModule, MatExpansionModule,
  MatDatepickerModule, MatNativeDateModule, MatSelectModule,
} from '@angular/material';

import { of, throwError } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

describe('RegistroComiteComponent', () => {
  let component: RegistroComiteComponent;
  let fixture: ComponentFixture<RegistroComiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroComiteComponent ],
      imports: [ MatCardModule, MatInputModule, MatButtonModule, MatDividerModule, MatToolbarModule,
        MatSidenavModule, MatMenuModule, MatIconModule, MatListModule, MatExpansionModule,
        MatDatepickerModule, MatNativeDateModule, MatSelectModule, ReactiveFormsModule, HttpClientModule, BrowserAnimationsModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroComiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    localStorage.setItem('currentUser', JSON.stringify({token: 'token'}));
    component.comiteForm.setValue(
      {
        nameUser: 'name',
        lastNameUser: 'last',
        birthDateUser: '14/10/1998',
        identificationUser: '1111',
        emailUser: 'luis@gmail.com',
        passwordUser: '123'
      }
    );
  });

  it('should show invalid token', () => {
    spyOn(component.userService, 'createUser').and.returnValue(of({message: 'Invalid Token'}));
    component.registerComite();
  });

  it('should methond return null', () => {
    component.comiteForm.reset();
    component.registerComite();
  });

});
