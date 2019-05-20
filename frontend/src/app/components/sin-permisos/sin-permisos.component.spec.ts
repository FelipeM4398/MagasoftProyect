import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinPermisosComponent } from './sin-permisos.component';

describe('SinPermisosComponent', () => {
  let component: SinPermisosComponent;
  let fixture: ComponentFixture<SinPermisosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinPermisosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinPermisosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
