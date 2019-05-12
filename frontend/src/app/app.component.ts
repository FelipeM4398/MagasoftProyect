import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserService } from './services/user.service';
import { User } from './_interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user: User;
  loaded = false;
  identification = new FormControl('');

  constructor( public userService: UserService ) {}

  getUserByIdentification() {
    this.userService.getUserByIdentification(this.identification.value).subscribe(
      data => this.user = data,
      error => console.error(error),
      () => { this.loaded = true; console.log(this.user); }
    );
  }
}
