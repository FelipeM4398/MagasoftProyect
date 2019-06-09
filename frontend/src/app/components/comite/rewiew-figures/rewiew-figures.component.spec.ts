import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RewiewFiguresComponent } from './rewiew-figures.component';

describe('RewiewFiguresComponent', () => {
  let component: RewiewFiguresComponent;
  let fixture: ComponentFixture<RewiewFiguresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RewiewFiguresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RewiewFiguresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
