import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/_interfaces/user';
import { UserService } from 'src/app/services/user/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-evaluador',
  templateUrl: './registro-evaluador.component.html',
  styleUrls: ['./registro-evaluador.component.css']
})
export class RegistroEvaluadorComponent implements OnInit {

  evaluador: User;

  evaluadorForm = new FormGroup({
    nameUser: new FormControl('', Validators.required),
    lastNameUser: new FormControl('', Validators.required),
    birthDateUser: new FormControl('', Validators.required),
    identificationUser: new FormControl('', Validators.required),
    emailUser: new FormControl('', [Validators.required, Validators.email]),
    passwordUser: new FormControl('', Validators.required),
    linkCvlackEvaluator: new FormControl('', Validators.required),
    levelEducationEvaluator: new FormControl('', Validators.required),
  });

  constructor(public userService: UserService) { }

  ngOnInit() {
  }

  registerEvaluador() {
    if ( this.evaluadorForm.invalid ) {
      return;
    } else {
      this.evaluador = this.evaluadorForm.value;
      this.evaluador.typeUser = 'EVALUADOR';
      this.evaluador.hodbed = '';
      const token = 'bearer ' + JSON.parse(localStorage.getItem('currentUser')).token;
      this.userService.createUser(this.evaluador, token).subscribe(
        data => {
                  if (data.message === 'Invalid Token') {
                    Swal.fire('Error', 'No tienes permiso para realizar está accion', 'error');
                    console.log(data.message);
                  } else if (data.message === 'Created user') {
                    this.evaluadorForm.reset();
                    Swal.fire('Exito', 'Usuario registrado', 'success');
                  }
                },
        error => Swal.fire(`Error ${error.status}`, 'Algo ha ocurrido mal, intentalo más tarde', 'error'),
      );
    }
  }

  get nameUser() {
    return this.evaluadorForm.get('nameUser');
  }

  get lastNameUser() {
    return this.evaluadorForm.get('lastNameUser');
  }

  get birthDateUser() {
    return this.evaluadorForm.get('birthDateUser');
  }

  get identificationUser() {
    return this.evaluadorForm.get('identificationUser');
  }

  get emailUser() {
    return this.evaluadorForm.get('emailUser');
  }

  get passwordUser() {
    return this.evaluadorForm.get('passwordUser');
  }

  get linkCvlackEvaluator() {
    return this.evaluadorForm.get('linkCvlackEvaluator');
  }

  get levelEducationEvaluator() {
    return this.evaluadorForm.get('linkCvlackEvaluator');
  }

}
