import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  constructor(public authService: AuthService,  private router: Router) {
    if (this.authService.currentUserValue) {
      this.router.navigate([this.returnUrl(this.authService.currentUserValue.privilegesTypeUser)]);
  }
  }

  ngOnInit() {
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  logIn() {
    this.authService.SignUp(this.email.value, this.password.value)
    .pipe(first())
    .subscribe(
      (data: any) => this.router.navigate([this.returnUrl(data.privilegesTypeUser)]),
      error => swal('Error!', 'Email o contraseña incorrectos!', 'error'),
    );
  }

  returnUrl(rol: string): string {
    if (rol === 'ADMINISTRADOR') {
      return 'administrator/home';
    } else if ( rol === 'AUTOR' ) {
      return 'autor/home';
    }
  }
}
