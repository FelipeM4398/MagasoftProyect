import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/_interfaces/article';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ArticleService } from 'src/app/services/article/article.service';
import Swal from 'sweetalert2';
import { OptionsService } from 'src/app/services/options/options.service';
import { Category } from 'src/app/_interfaces/category';

@Component({
  selector: 'app-registrar-articulo',
  templateUrl: './registrar-articulo.component.html',
  styleUrls: ['./registrar-articulo.component.css']
})
export class RegistrarArticuloComponent implements OnInit {

  article: Article;
  categories: Category[];
  file: any;

  articleForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    nameCategory: new FormControl('', Validators.required),
  });

  formData = new FormData();

  constructor(public articleService: ArticleService, public optionsService: OptionsService) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    const token = 'bearer ' + JSON.parse(localStorage.getItem('currentUser')).token;
    this.optionsService.getCategories(token).subscribe(
      (data: any) => this.categories = data.message,
      (error: any) => console.error(error)
    );
  }

  onChange(event) {
    this.file = event.target.files[0];
  }

  registerArticle() {
    if (this.articleForm.invalid || this.file == null) {
      return;
    } else {
      this.article = this.articleForm.value;
      console.log( this.articleForm.value);
      this.article.publicationDate = new Date();
// tslint:disable-next-line: max-line-length
      this.article.urlFile = `C:/Users/luisf/OneDrive/Documentos/Universidad/Ingeniería de Software III/MAGASOFT/MagasoftProyect/frontend/src/assets/articles/${this.file.name}`;
      console.log(this.article);
      this.article.userIdUser = JSON.parse(localStorage.getItem('currentUser')).idUser;
      this.article.typeUser = JSON.parse(localStorage.getItem('currentUser')).privilegesTypeUser;
      const token = 'bearer ' + JSON.parse(localStorage.getItem('currentUser')).token;
      this.articleService.uploadArchive(this.file).subscribe(
        data => console.log(data),
        error => console.log(error)
      );
      this.articleService.createArticle(this.article, token).subscribe(
        data => {
                  if (data.message === 'Invalid Token') {
                    Swal.fire('Error', 'No tienes permiso para realizar está accion', 'error');
                  } else if (data.message === 'Article created') {
                    this.articleForm.reset();
                    Swal.fire('Exito', 'Articulo registrado', 'success');
                  } else {
                    Swal.fire('Mensaje', data.message, 'info');
                  }
                },
        error => Swal.fire(`Error ${error.status}`, 'Algo ha ocurrido mal, intentalo más tarde', 'error'),
      );
    }
  }

  get title() {
    return this.articleForm.get('title');
  }

  get description() {
    return this.articleForm.get('description');
  }

}
