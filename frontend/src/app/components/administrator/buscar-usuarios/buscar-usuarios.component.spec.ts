import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarUsuariosComponent } from './buscar-usuarios.component';

describe('BuscarUsuariosComponent', () => {
  let component: BuscarUsuariosComponent;
  let fixture: ComponentFixture<BuscarUsuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarUsuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
