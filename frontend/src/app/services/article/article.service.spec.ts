import { TestBed, getTestBed } from '@angular/core/testing';

import { ArticleService } from './article.service';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Article } from 'src/app/_interfaces/article';

describe('ArticleService', () => {

  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
  });

  it('should return an observable', () => {
    const service: ArticleService = TestBed.get(ArticleService);

    service.getMyArticles('email', 'token').subscribe(
      articles => {
        expect(articles).toEqual({message: 'article'});
      },
    );

    const req = httpMock.expectOne('http://localhost:3000/author/ViewArticle');
    expect(req.request.method).toBe('POST');
    req.flush({message: 'article'});
  });

  it('should create an article', () => {
    const service: ArticleService = TestBed.get(ArticleService);
    const article: Article = null;

    service.createArticle(article, 'token').subscribe(
      articles => {
        expect(articles).toEqual({message: 'Create Article'});
      },
    );

    const req = httpMock.expectOne('http://localhost:3000/author/createArticle');
    expect(req.request.method).toBe('POST');
    req.flush({message: 'Create Article'});
  });
});
