import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MatCardModule, MatInputModule, MatButtonModule, MatDividerModule, MatToolbarModule,
          MatSidenavModule, MatMenuModule, MatIconModule } from '@angular/material';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/administrator/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, MatCardModule, MatInputModule, MatButtonModule,
    AppRoutingModule, BrowserAnimationsModule, MatDividerModule, MatMenuModule,
    HttpClientModule, MatToolbarModule, MatSidenavModule, MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
