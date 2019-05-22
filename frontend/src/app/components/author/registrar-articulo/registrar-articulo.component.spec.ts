import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrarArticuloComponent } from './registrar-articulo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatCardModule, MatInputModule, MatButtonModule, MatDividerModule, MatToolbarModule,
  MatSidenavModule, MatMenuModule, MatIconModule, MatListModule, MatExpansionModule,
  MatDatepickerModule, MatNativeDateModule, MatSelectModule,
} from '@angular/material';

import { of, throwError } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

describe('RegistrarArticuloComponent', () => {
  let component: RegistrarArticuloComponent;
  let fixture: ComponentFixture<RegistrarArticuloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarArticuloComponent ],
      imports: [MatCardModule, MatInputModule, MatButtonModule, MatDividerModule, MatToolbarModule,
        MatSidenavModule, MatMenuModule, MatIconModule, MatListModule, MatExpansionModule,
        MatDatepickerModule, MatNativeDateModule, MatSelectModule, ReactiveFormsModule, HttpClientModule,
        BrowserAnimationsModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.articleForm.setValue({title: 'title', description: 'description'});
    localStorage.setItem('currentUser', JSON.stringify({userId: '1', privilegesTypeUser: 'AUTHOR', token: 'token'}));
  });

  it('should show invalid token', () => {
    spyOn(component.articleService, 'createArticle').and.returnValue(of({message: 'Invalid Token'}));
    component.registerArticle();
  });

  it('should register article', () => {
    spyOn(component.articleService, 'createArticle').and.returnValue(of({message: 'Article created'}));
    component.registerArticle();
  });

  it('should show info message', () => {
    spyOn(component.articleService, 'createArticle').and.returnValue(of({message: 'Info message'}));
    component.registerArticle();
  });

  it('should show error message', () => {
    spyOn(component.articleService, 'createArticle').and.returnValue(throwError('error'));
    component.registerArticle();
  });

  it('should return null', () => {
    component.articleForm.reset();
    component.registerArticle();
  });

});
