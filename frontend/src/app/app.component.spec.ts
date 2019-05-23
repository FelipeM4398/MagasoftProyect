import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatCardModule, MatInputModule, MatButtonModule, MatDividerModule, MatToolbarModule,
  MatSidenavModule, MatMenuModule, MatIconModule, MatListModule, MatExpansionModule,
  MatDatepickerModule, MatNativeDateModule, MatSelectModule,
} from '@angular/material';
import { UserService } from './services/user/user.service';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  const routerMock = {navigate: jasmine.createSpy('navigate')};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, ReactiveFormsModule, HttpClientModule, MatCardModule, MatInputModule,
        MatButtonModule, MatDividerModule, MatToolbarModule, BrowserAnimationsModule,
        MatSidenavModule, MatMenuModule, MatIconModule, MatListModule, MatExpansionModule,
        MatDatepickerModule, MatNativeDateModule, MatSelectModule,
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        UserService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create app', () => {
    component.logOut();
    component.returnUrl('');
  });

});
