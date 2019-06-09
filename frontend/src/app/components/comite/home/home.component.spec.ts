import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComiteComponent } from './home-comite.component';

describe('HomeComponent', () => {
  let component: HomeComiteComponent;
  let fixture: ComponentFixture<HomeComiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
