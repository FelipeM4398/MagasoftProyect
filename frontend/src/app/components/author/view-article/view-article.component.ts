import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/_interfaces/article';
import { ArticleService } from 'src/app/services/article/article.service';

@Component({
  selector: 'app-view-article',
  templateUrl: './view-article.component.html',
  styleUrls: ['./view-article.component.css']
})
export class ViewArticleComponent implements OnInit {

  articles: any[];

  constructor( public articleService: ArticleService ) { }

  ngOnInit() {
    this.getMyArticles();
  }

  getMyArticles() {
    const email = JSON.parse(localStorage.getItem('currentUser')).emailUser;
    const token = 'bearer ' + JSON.parse(localStorage.getItem('currentUser')).token;
    this.articleService.getMyArticles(email, token).subscribe(
      data => { this.articles = data.message; },
      error => console.log(error),
    );
  }

}
