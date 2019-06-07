import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/_interfaces/user';
import { UserService } from 'src/app/services/user/user.service';
import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-mi-informacion',
  templateUrl: './mi-informacion.component.html',
  styleUrls: ['./mi-informacion.component.css']
})
export class MiInformacionComponent implements OnInit {

  currentUser: User;
  currentUserSubscription: Subscription;
  dataChange = false;

  userForm = new FormGroup({
    nameUser: new FormControl('', Validators.required),
    lastNameUser: new FormControl('', Validators.required),
    birthDateUser: new FormControl('', Validators.required),
    identificationUser: new FormControl('', Validators.required),
  });

  constructor(private authService: AuthService, private userService: UserService) {
    this.currentUserSubscription = this.authService.currentUser.subscribe((user: any) => {
      this.currentUser = user;
      this.userForm.setValue({nameUser: user.nameUser, lastNameUser: user.lastNameUser,
        birthDateUser: user.birthDateUser, identificationUser: user.identificationUser});
    });
  }

  ngOnInit() {
    this.identificationUser.enable();
    this.userForm.valueChanges.subscribe(
      data => this.dataChange = true,
    );
  }

  updateUser() {
    if (this.userForm.invalid) {
      return;
    } else {
      this.currentUser = this.userForm.value;
      const token = 'bearer ' + JSON.parse(localStorage.getItem('currentUser')).token;
      this.userService.updateData(this.currentUser, token).subscribe(
        data => {
                  if (data.message === 'Invalid Token') {
                    Swal.fire('Error', 'No tienes permiso para realizar está accion', 'error');
                  } else if (data.message === 'updated info') {
                    Swal.fire('Exito', 'Información actualizada', 'success');
                    this.dataChange = false;
                  } else {
                      Swal.fire('Mensaje', data.message, 'info');
                  }
                },
        error => Swal.fire(`Error ${error.status}`, 'Algo ha ocurrido mal, intentalo más tarde', 'error'),
      );
    }
  }

  get nameUser() {
    return this.userForm.get('nameUser');
  }

  get lastNameUser() {
    return this.userForm.get('lastNameUser');
  }

  get birthDateUser() {
    return this.userForm.get('birthDateUser');
  }

  get identificationUser() {
    return this.userForm.get('identificationUser');
  }

}
