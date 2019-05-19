import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroAutorComponent } from './registro-autor.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('RegistroAutorComponent', () => {
  let component: RegistroAutorComponent;
  let fixture: ComponentFixture<RegistroAutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroAutorComponent ],
      imports: [ ReactiveFormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
