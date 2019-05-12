import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { throwError, of, observable } from 'rxjs';
import { UserService } from './services/user.service';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, ReactiveFormsModule, HttpClientModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        UserService
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    fixture  = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('When getUserByIdentification() is called', () => {

    it('should be fine', () => {
      spyOn(component.userService, 'getUserByIdentification').and.returnValue(of({data: {}}));
      component.getUserByIdentification();
      expect(component.loaded).toBeTruthy();
    });

    it('should handle error', () => {
      spyOn(component.userService, 'getUserByIdentification').and.returnValue(throwError({error: 'error'}));
      component.getUserByIdentification();
      expect(component.loaded).toBeFalsy();
    });
  });

});
