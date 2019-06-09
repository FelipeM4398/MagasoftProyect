import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectArticleComponent } from './select-article.component';

describe('SelectArticleComponent', () => {
  let component: SelectArticleComponent;
  let fixture: ComponentFixture<SelectArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
