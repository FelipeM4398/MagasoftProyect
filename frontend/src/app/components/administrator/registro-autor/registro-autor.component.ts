import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-autor',
  templateUrl: './registro-autor.component.html',
  styleUrls: ['./registro-autor.component.css']
})
export class RegistroAutorComponent implements OnInit {

  autorForm = new FormGroup({
    name: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    birthdate: new FormControl('', Validators.required),
    identification: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    hodbed: new FormControl('', Validators.required),
    levelEducation: new FormControl('', Validators.required),
  });

  hodbeds = [
    {id: 1, name: 'SELECT'},
    {id: 2, name: 'ITMEDIA'},
    {id: 3, name: 'GESCO'},
    {id: 4, name: 'LUMEN'},
    {id: 5, name: 'SIEMBRA'},
  ];

  constructor() { }

  ngOnInit() {
  }

  get name() {
    return this.autorForm.get('name');
  }

  get lastName() {
    return this.autorForm.get('lastName');
  }

  get birthdate() {
    return this.autorForm.get('birthdate');
  }

  get identification() {
    return this.autorForm.get('identification');
  }

  get hodbed() {
    return this.autorForm.get('hodbed');
  }

  get levelEducation() {
    return this.autorForm.get('levelEducation');
  }

  get email() {
    return this.autorForm.get('email');
  }

  get password() {
    return this.autorForm.get('password');
  }

}
