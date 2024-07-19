import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCard, MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignupComponent } from './auth-component/signup/signup.component';
import { LoginComponent } from './auth-component/login/login.component';
import { HomeComponentComponent } from './auth-component/home-component/home-component.component';
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    ReactiveFormsModule,
    MatTableModule,
    HttpClientModule,
    NgbModule
    
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
