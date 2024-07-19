import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './auth-component/signup/signup.component';
import { LoginComponent } from './auth-component/login/login.component';
import { HomeComponentComponent } from './auth-component/home-component/home-component.component';

const routes: Routes = [
  {path:"",component:HomeComponentComponent},
  {path:"signup",component:SignupComponent},
  {path:"login",component:LoginComponent},
  {path:"admin",loadChildren:()=>import("./modules/admin/admin.module").then(m=>m.AdminModule)},
  {path:"customer",loadChildren:()=>import("./modules/customer/customer.module").then(m=>m.CustomerModule)},

  ];
    
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
