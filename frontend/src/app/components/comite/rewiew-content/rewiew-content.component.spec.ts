import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RewiewContentComponent } from './rewiew-content.component';

describe('RewiewContentComponent', () => {
  let component: RewiewContentComponent;
  let fixture: ComponentFixture<RewiewContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RewiewContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RewiewContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
