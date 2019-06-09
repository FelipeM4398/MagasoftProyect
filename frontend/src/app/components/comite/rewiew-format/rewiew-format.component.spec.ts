import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RewiewFormatComponent } from './rewiew-format.component';

describe('RewiewFormatComponent', () => {
  let component: RewiewFormatComponent;
  let fixture: ComponentFixture<RewiewFormatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RewiewFormatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RewiewFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
