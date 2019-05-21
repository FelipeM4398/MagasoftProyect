import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/administrator/home/home.component';
import { HomeAuthorComponent } from './components/author/home/home-author.component';
import { AdministratorGuard } from './_guards/administrator.guard';
import { RegistroAutorComponent } from './components/administrator/registro-autor/registro-autor.component';
import { RegistroComiteComponent } from './components/administrator/registro-comite/registro-comite.component';
import { RegistroEvaluadorComponent } from './components/administrator/registro-evaluador/registro-evaluador.component';
import { SinPermisosComponent } from './components/sin-permisos/sin-permisos.component';
import { AuthorGuard } from './_guards/author.guard';
import { RegistrarArticuloComponent } from './components/author/registrar-articulo/registrar-articulo.component';
import { ViewArticleComponent } from './components/author/view-article/view-article.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'administrator', canActivate: [AdministratorGuard],
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'registrar/autor', component: RegistroAutorComponent },
      { path: 'registrar/comite', component: RegistroComiteComponent },
      { path: 'registrar/evaluador', component: RegistroEvaluadorComponent },
    ]
  },
  {
    path: 'author', canActivate: [AuthorGuard],
    children: [
      { path: 'home', component: HomeAuthorComponent },
      { path: 'registrar/article', component: RegistrarArticuloComponent },
      { path: 'myarticles', component: ViewArticleComponent },
    ]
  },
  { path: 'unathorized', component: SinPermisosComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
