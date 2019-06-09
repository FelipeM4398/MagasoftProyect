import { Component, OnInit } from '@angular/core';
import 'hammerjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-article',
  templateUrl: './select-article.component.html',
  styleUrls: ['./select-article.component.css']
})
export class SelectArticleComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirectFormat() {
    this.router.navigate(['/committee/rewiew/format']);
  }

  redirectFigures() {
    this.router.navigate(['/committee/rewiew/figures']);
  }

  redirectContent() {
    this.router.navigate(['/committee/rewiew/content']);
  }

}
