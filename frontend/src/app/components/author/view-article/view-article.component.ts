import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/_interfaces/article';
import { ArticleService } from 'src/app/services/article/article.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-view-article',
  templateUrl: './view-article.component.html',
  styleUrls: ['./view-article.component.css']
})
export class ViewArticleComponent implements OnInit {

  articles: any[];
  fileUrl;
  constructor( public articleService: ArticleService, private sanitizer: DomSanitizer ) { }

  ngOnInit() {
    this.getMyArticles();
  }

  getMyArticles() {
    const email = JSON.parse(localStorage.getItem('currentUser')).emailUser;
    const token = 'bearer ' + JSON.parse(localStorage.getItem('currentUser')).token;
    this.articleService.getMyArticles(email, token).subscribe(
      data => {
        this.articles = data.message;
        this.articles.map((element) => {
          const blob = new Blob([element.urlFile], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
          this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
       });
      },
      error => console.log(error),
    );
  }

}
