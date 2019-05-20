import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/_interfaces/article';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ArticleService } from 'src/app/services/article/article.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrar-articulo',
  templateUrl: './registrar-articulo.component.html',
  styleUrls: ['./registrar-articulo.component.css']
})
export class RegistrarArticuloComponent implements OnInit {

  article: Article;

  articleForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });

  constructor(public articleService: ArticleService) { }

  ngOnInit() {
  }

  registerArticle() {
    this.article = this.articleForm.value;
    this.article.publicationDate = new Date();
    this.article.userIdUser = JSON.parse(localStorage.getItem('currentUser')).idUser;
    this.article.typeUser = JSON.parse(localStorage.getItem('currentUser')).privilegesTypeUser;
    const token = 'bearer ' + JSON.parse(localStorage.getItem('currentUser')).token;

    this.articleService.createArticle(this.article, token).subscribe(
      data => {
                if (data.message === 'Invalid Token') {
                  Swal.fire('Error', 'No tienes permiso para realizar está accion', 'error');
                  console.log(data.message);
                } else if (data.message === 'Article created') {
                  this.articleForm.reset();
                  Swal.fire('Exito', 'Articulo registrado', 'success');
                }
              },
      error => Swal.fire(`Error ${error.status}`, 'Algo ha ocurrido mal, intentalo más tarde', 'error'),
    );
  }

  get title() {
    return this.articleForm.get('title');
  }

  get description() {
    return this.articleForm.get('description');
  }

}
