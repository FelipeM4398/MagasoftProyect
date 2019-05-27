import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/administrator/home/home.component';
import { HomeAuthorComponent } from './components/author/home/home-author.component';
import { RegistroAutorComponent } from './components/administrator/registro-autor/registro-autor.component';
import { RegistroComiteComponent } from './components/administrator/registro-comite/registro-comite.component';
import { RegistroEvaluadorComponent } from './components/administrator/registro-evaluador/registro-evaluador.component';
import { SinPermisosComponent } from './components/sin-permisos/sin-permisos.component';
import { RegistrarArticuloComponent } from './components/author/registrar-articulo/registrar-articulo.component';
import { ViewArticleComponent } from './components/author/view-article/view-article.component';

import { AuthGuard } from './_guards/auth.guard';
import { RegistroCategoriaComponent } from './components/administrator/registro-categoria/registro-categoria.component';
import { MiInformacionComponent } from './components/mi-informacion/mi-informacion.component';
import { BuscarUsuariosComponent } from './components/administrator/buscar-usuarios/buscar-usuarios.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'administrator', canActivate: [AuthGuard],
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'registrar/autor', component: RegistroAutorComponent },
      { path: 'registrar/comite', component: RegistroComiteComponent },
      { path: 'registrar/evaluador', component: RegistroEvaluadorComponent },
      { path: 'registrar/categoria', component: RegistroCategoriaComponent },
      { path: 'usuarios', component: BuscarUsuariosComponent },
    ]
  },
  {
    path: 'author', canActivate: [AuthGuard],
    children: [
      { path: 'home', component: HomeAuthorComponent },
      { path: 'registrar/article', component: RegistrarArticuloComponent },
      { path: 'myarticles', component: ViewArticleComponent },
    ]
  },
  { path: 'info', component: MiInformacionComponent, canActivate: [AuthGuard] },
  { path: 'unathorized', component: SinPermisosComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
