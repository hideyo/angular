import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';

import { ProductModule } from './product/product.module';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    ProductModule,

    AppRoutingModule
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'nl' } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
