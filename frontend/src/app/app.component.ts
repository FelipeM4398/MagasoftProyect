import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users: any;
  loaded = false;

  constructor( private userService: UserService ) {}

  ngOnInit(): void {
    this.getAdminUsers();
  }

  getAdminUsers() {
    this.userService.getAdminUsers().subscribe(
      data => this.users = data,
      error => console.log(error),
      () => { this.loaded = true; console.log(this.users); }
    );
  }
}
