import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroComiteComponent } from './registro-comite.component';

describe('RegistroComiteComponent', () => {
  let component: RegistroComiteComponent;
  let fixture: ComponentFixture<RegistroComiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroComiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroComiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
