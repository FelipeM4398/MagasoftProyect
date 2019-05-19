import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/administrator/home/home.component';
import { AdministratorGuard } from './_guards/administrator.guard';
import { RegistroAutorComponent } from './components/administrator/registro-autor/registro-autor.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'administrator', canActivate: [AdministratorGuard],
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'registrar/autor', component: RegistroAutorComponent },
    ]
  },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
