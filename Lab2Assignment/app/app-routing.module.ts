import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { ProductNotFoundComponent } from './product-not-found/product-not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  { path : '', redirectTo: '/departments', pathMatch: 'full'},
  { path : 'departments', component: ProductComponent},
  { path : 'departments/:id', component: ProductDetailsComponent},
  { path : 'employees', component: CategoryComponent},
  { path : '**', component: ProductNotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
