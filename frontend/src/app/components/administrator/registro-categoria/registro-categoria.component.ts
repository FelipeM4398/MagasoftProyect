import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Category } from 'src/app/_interfaces/category';
import { OptionsService } from 'src/app/services/options/options.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-categoria',
  templateUrl: './registro-categoria.component.html',
  styleUrls: ['./registro-categoria.component.css']
})
export class RegistroCategoriaComponent implements OnInit {


  category: Category;
  categories: Category[];

  categoryForm = new FormGroup({
    nameCategory: new FormControl('', Validators.required),
  });

  constructor(public optionsService: OptionsService) { }

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

  registerCategory() {
    if (this.categoryForm.invalid) {
      return;
    } else {
      this.category = this.categoryForm.value;
      const token = 'bearer ' + JSON.parse(localStorage.getItem('currentUser')).token;
      this.optionsService.createCategory(this.category.nameCategory, token).subscribe(
        (data: any) => {
          if (data.message === 'Invalid Token') {
            Swal.fire('Error', 'No tienes permiso para realizar está accion', 'error');
          } else if (data.message === 'Category created') {
            Swal.fire('Exito', 'Articulo registrado', 'success');
          } else {
            Swal.fire('Mensaje', data.message, 'info');
          }
        },
        error => Swal.fire(`Error ${error.status}`, 'Algo ha ocurrido mal, intentalo más tarde', 'error'),
        () => {
          this.getCategories();
          this.categoryForm.reset();
        }
      );
    }
  }

  get nameCategory() {
    return this.categoryForm.get('nameCategory');
  }

}
