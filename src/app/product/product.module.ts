import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';

import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { CategoryDetailComponent } from './category/category-detail.component';
import { ProductDetailComponent } from './product/product-detail.component';
import { ProductImagesComponent } from './product-images/product-images.component';

@NgModule({
  imports: [
    SharedModule,
    ProductRoutingModule
  ],
  declarations: [
    ProductComponent,
    CategoryComponent,
    CategoryDetailComponent,
    ProductDetailComponent,
    ProductImagesComponent
  ]
})
export class ProductModule { }
