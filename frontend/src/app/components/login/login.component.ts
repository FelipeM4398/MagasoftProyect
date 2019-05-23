import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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
  articleForm: any;

  constructor(public authService: AuthService,  private router: Router) {
    if (this.authService.currentUserValue) {
      this.router.navigate([this.returnUrl(this.authService.currentUserValue.privilegesTypeUser)]);
    } else {
      return;
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
    if (this.loginForm.invalid) {
      return;
    } else {
      this.authService.SignUp(this.email.value, this.password.value)
      .pipe(first())
      .subscribe(
        (data: any) => this.router.navigate([this.returnUrl(data.privilegesTypeUser)]),
        error => Swal.fire('Error', 'Credenciales incorrectas', 'error'),
      );
    }
  }

  returnUrl(rol: string) {
    return this.authService.returnUrl(rol);
  }
}
