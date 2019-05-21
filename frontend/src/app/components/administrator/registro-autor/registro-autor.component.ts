import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/_interfaces/user';
import { UserService } from 'src/app/services/user/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-autor',
  templateUrl: './registro-autor.component.html',
  styleUrls: ['./registro-autor.component.css']
})
export class RegistroAutorComponent implements OnInit {

  autor: User;

  autorForm = new FormGroup({
    nameUser: new FormControl('', Validators.required),
    lastNameUser: new FormControl('', Validators.required),
    birthDateUser: new FormControl('', Validators.required),
    identificationUser: new FormControl('', Validators.required),
    emailUser: new FormControl('', [Validators.required, Validators.email]),
    passwordUser: new FormControl('', Validators.required),
    hodbed: new FormControl('', Validators.required)
  });

  hodbeds = [
    {id: 1, name: 'SELECT'},
    {id: 2, name: 'ITMEDIA'},
    {id: 3, name: 'GESCO'},
    {id: 4, name: 'LUMEN'},
    {id: 5, name: 'SIEMBRA'},
  ];

  constructor(public userService: UserService) { }

  ngOnInit() {
  }

  registerAutor() {
    this.autor = this.autorForm.value;
    this.autor.typeUser = 'AUTOR';
    this.autor.levelEducationEvaluator = '';
    this.autor.linkCvlackEvaluator = '';
    const token = 'bearer ' + JSON.parse(localStorage.getItem('currentUser')).token;
    console.log(this.autor, token);
    this.userService.createUser(this.autor, token).subscribe(
      data => {
                if (data.message === 'Invalid Token') {
                  Swal.fire('Error', 'No tienes permiso para realizar está accion', 'error');
                  console.log(data.message);
                } else if (data.message === 'Created user') {
                  this.autorForm.reset();
                  Swal.fire('Exito', 'Usuario registrado', 'success');
                }
              },
      error => Swal.fire(`Error ${error.status}`, 'Algo ha ocurrido mal, intentalo más tarde', 'error'),
    );
  }

  get nameUser() {
    return this.autorForm.get('nameUser');
  }

  get lastNameUser() {
    return this.autorForm.get('lastNameUser');
  }

  get birthDateUser() {
    return this.autorForm.get('birthDateUser');
  }

  get identificationUser() {
    return this.autorForm.get('identificationUser');
  }

  get hodbed() {
    return this.autorForm.get('hodbed');
  }

  get emailUser() {
    return this.autorForm.get('emailUser');
  }

  get passwordUser() {
    return this.autorForm.get('passwordUser');
  }

}
