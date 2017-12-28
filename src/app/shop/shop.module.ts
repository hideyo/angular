import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { ProductService } from './shared/product.service';

@NgModule({
  imports: [
    SharedModule,
    ShopRoutingModule
  ],
  declarations: [
    ShopComponent
  ],
  providers: [
    ProductService
  ]
})
export class ShopModule { }
