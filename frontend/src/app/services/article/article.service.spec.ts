import { TestBed, getTestBed } from '@angular/core/testing';

import { ArticleService } from './article.service';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

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

  it('should be created', () => {
    const service: ArticleService = TestBed.get(ArticleService);
    expect(service).toBeTruthy();
  });
});
