import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product/product-detail.component';

import { CategoryComponent } from './category/category.component';
import { CategoryDetailComponent } from './category/category-detail.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductComponent, 
    children: [
      {
        path: ':id',
        component: ProductDetailComponent,
      }
    ]
  },
  {
    path: 'categories', 
    component: CategoryComponent, 
    children: [
      {
        path: ':id',
        component: CategoryDetailComponent,
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProductRoutingModule { }
