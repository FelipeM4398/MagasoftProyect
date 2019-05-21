import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/_interfaces/user';
import { UserService } from 'src/app/services/user/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-comite',
  templateUrl: './registro-comite.component.html',
  styleUrls: ['./registro-comite.component.css']
})
export class RegistroComiteComponent implements OnInit {

  comite: User;

  comiteForm = new FormGroup({
    nameUser: new FormControl('', Validators.required),
    lastNameUser: new FormControl('', Validators.required),
    birthDateUser: new FormControl('', Validators.required),
    identificationUser: new FormControl('', Validators.required),
    emailUser: new FormControl('', [Validators.required, Validators.email]),
    passwordUser: new FormControl('', Validators.required),
  });

  constructor(public userService: UserService) { }

  ngOnInit() {
  }

  registerComite() {
    this.comite = this.comiteForm.value;
    this.comite.typeUser = 'MIEMBRO COMITE';
    this.comite.levelEducationEvaluator = '';
    this.comite.linkCvlackEvaluator = '';
    this.comite.hodbed = '';
    const token = 'bearer ' + JSON.parse(localStorage.getItem('currentUser')).token;
    this.userService.createUser(this.comite, token).subscribe(
      data => {
                if (data.message === 'Invalid Token') {
                  Swal.fire('Error', 'No tienes permiso para realizar está accion', 'error');
                  console.log(data.message);
                } else if (data.message === 'Created user') {
                  this.comiteForm.reset();
                  Swal.fire('Exito', 'Usuario registrado', 'success');
                }
              },
      error => Swal.fire(`Error ${error.status}`, 'Algo ha ocurrido mal, intentalo más tarde', 'error'),
    );
  }

  get nameUser() {
    return this.comiteForm.get('nameUser');
  }

  get lastNameUser() {
    return this.comiteForm.get('lastNameUser');
  }

  get birthDateUser() {
    return this.comiteForm.get('birthDateUser');
  }

  get identificationUser() {
    return this.comiteForm.get('identificationUser');
  }

  get emailUser() {
    return this.comiteForm.get('emailUser');
  }

  get passwordUser() {
    return this.comiteForm.get('passwordUser');
  }

}
