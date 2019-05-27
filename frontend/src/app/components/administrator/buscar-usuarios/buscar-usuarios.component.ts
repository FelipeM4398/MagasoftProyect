import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/_interfaces/user';
import { UserService } from 'src/app/services/user/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-buscar-usuarios',
  templateUrl: './buscar-usuarios.component.html',
  styleUrls: ['./buscar-usuarios.component.css']
})
export class BuscarUsuariosComponent implements OnInit {

  users: User[];

  searchForm = new FormGroup({
    text: new FormControl(''),
  });

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    const token = 'bearer ' + JSON.parse(localStorage.getItem('currentUser')).token;
    this.userService.getUsers(token).subscribe(
      (data: any) => this.users = data.message,
      (error: any) => console.error(error)
    );
  }

}
