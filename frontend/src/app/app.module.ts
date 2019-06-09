import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import {
          MatCardModule, MatInputModule, MatButtonModule, MatDividerModule, MatToolbarModule,
          MatSidenavModule, MatMenuModule, MatIconModule, MatListModule, MatExpansionModule,
          MatDatepickerModule, MatNativeDateModule, MatSelectModule, MatTooltipModule, MatCheckboxModule
        } from '@angular/material';
import { HomeComponent } from './components/administrator/home/home.component';
import { RegistroAutorComponent } from './components/administrator/registro-autor/registro-autor.component';
import { RegistroComiteComponent } from './components/administrator/registro-comite/registro-comite.component';
import { RegistroEvaluadorComponent } from './components/administrator/registro-evaluador/registro-evaluador.component';

import { HomeAuthorComponent } from './components/author/home/home-author.component';

import { HomeComiteComponent } from './components/comite/home/home-comite.component';

import { SinPermisosComponent } from './components/sin-permisos/sin-permisos.component';
import { RegistrarArticuloComponent } from './components/author/registrar-articulo/registrar-articulo.component';
import { ViewArticleComponent } from './components/author/view-article/view-article.component';
import { RegistroCategoriaComponent } from './components/administrator/registro-categoria/registro-categoria.component';
import { MiInformacionComponent } from './components/mi-informacion/mi-informacion.component';
import { BuscarUsuariosComponent } from './components/administrator/buscar-usuarios/buscar-usuarios.component';
import { SelectArticleComponent } from './components/comite/select-article/select-article.component';
import { RewiewFormatComponent } from './components/comite/rewiew-format/rewiew-format.component';
import { RewiewFiguresComponent } from './components/comite/rewiew-figures/rewiew-figures.component';
import { RewiewContentComponent } from './components/comite/rewiew-content/rewiew-content.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegistroAutorComponent,
    RegistroComiteComponent,
    RegistroEvaluadorComponent,
    SinPermisosComponent,
    HomeAuthorComponent,
    RegistrarArticuloComponent,
    ViewArticleComponent,
    RegistroCategoriaComponent,
    MiInformacionComponent,
    BuscarUsuariosComponent,
    HomeComiteComponent,
    SelectArticleComponent,
    RewiewFormatComponent,
    RewiewFiguresComponent,
    RewiewContentComponent,
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, MatCardModule, MatInputModule, MatButtonModule,
    AppRoutingModule, BrowserAnimationsModule, MatDividerModule, MatMenuModule,
    HttpClientModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule,
    MatExpansionModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule,
    MatTooltipModule, MatCheckboxModule
  ],
  providers: [ MatDatepickerModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }
