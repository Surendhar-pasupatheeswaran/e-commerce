import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PostProductComponent } from './admin-components/post-product/post-product.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DashboardComponent } from './admin-components/dashboard/dashboard.component';
import { AddCategoryComponent } from './admin-component/add-category/add-category.component';

@NgModule({
  declarations: [
    DashboardComponent,
    AddCategoryComponent,
    PostProductComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
  ]
})
export class AdminModule { }
