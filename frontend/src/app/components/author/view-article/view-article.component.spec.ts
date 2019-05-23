import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewArticleComponent } from './view-article.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatCardModule, MatInputModule, MatButtonModule, MatDividerModule, MatToolbarModule,
  MatSidenavModule, MatMenuModule, MatIconModule, MatListModule, MatExpansionModule,
  MatDatepickerModule, MatNativeDateModule, MatSelectModule,
} from '@angular/material';

import { of, throwError } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

describe('ViewArticleComponent', () => {
  let component: ViewArticleComponent;
  let fixture: ComponentFixture<ViewArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewArticleComponent ],
      imports: [MatCardModule, MatInputModule, MatButtonModule, MatDividerModule, MatToolbarModule,
        MatSidenavModule, MatMenuModule, MatIconModule, MatListModule, MatExpansionModule,
        MatDatepickerModule, MatNativeDateModule, MatSelectModule, HttpClientModule,
        BrowserAnimationsModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    localStorage.setItem('currentUser', JSON.stringify({emailUser: 'felipe@gmail.com', token: 'token'}));
  });

  it('should get my articles', () => {
    spyOn(component.articleService, 'getMyArticles').and.returnValue(of({message: 'articles'}));
    component.getMyArticles();
  });
});
